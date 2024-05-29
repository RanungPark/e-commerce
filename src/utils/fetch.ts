// interface Interceptor {
//   onRequest: (config: RequestInit) => RequestInit;
//   onResponse: (response: Response) => Response | PromiseLike<Response>;
//   onRequestError: (reason: unknown) => Promise<never>;
//   onResponseError: (reason: unknown) => Promise<never>;
// }
// export type FetchArguments = [string | URL, RequestInit | undefined];
// type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

// type Body = {} | null;

// type Headers = {
//   key: string;
//   value: string;
// };

// interface FirstOptions {
//   baseUrl: string;
//   headers: Headers[];
// }
// interface SecondOption {
//   version: string;
// }

// interface ThirdOptions {
//   endpoint: string;
// }
// interface FourthOptions {
//   method: Method;
//   body: Body;
// }

// type PartialInterceptor = Partial<Interceptor>;
// type PartialFourOptuons = Partial<FourthOptions>;

// type FetchUtil = ({
//   onRequest,
//   onResponse,
//   onRequestError,
//   onResponseError,
// }: PartialInterceptor) => ({
//   baseUrl,
//   headers,
// }: FirstOptions) => ({
//   version,
// }: SecondOption) => ({
//   endpoint,
// }: ThirdOptions) => ({ method, body }: PartialFourOptuons) => Promise<Response>;

// export const createFetch: FetchUtil =
//   ({
//     onRequest = confing => confing,
//     onResponse = response => response,
//     onRequestError = reason => Promise.reject(reason),
//     onResponseError = reason => Promise.reject(reason),
//   }) =>
//   ({ baseUrl, headers }) =>
//   ({ version }) =>
//   ({ endpoint }) =>
//   async ({ method = 'GET', body = null }) => {
//     const requestHeaders: HeadersInit = new Headers();

//     for (const { key, value } of headers) {
//       requestHeaders.set(key, value);
//     }

//     const requestUrl = `${baseUrl}/${version}/${endpoint}`;

//     let options: RequestInit = {
//       method,
//       headers: requestHeaders,
//       body: body ? JSON.stringify(body) : null,
//     };

//     options = onRequest(options);

//     try {
//       const response = await fetch(requestUrl, options);
//       if (!response.ok) {
//         return onResponseError(
//           new Error(`HTTP error status: ${response.status}`)
//         );
//       }
//       return onResponse(response);
//     } catch (reason) {
//       return onRequestError(reason);
//     }
//   };
// /**
//  * - 서버 마다 인스턴스 설정이 가능 해야한다.
//  *    - 인스턴스마다 다른 헤더 값 또는 다른 설정 값들을 줄 수 있어야한다.
//  * - API versioning 가능해야한다.
//  * - 요청을 취소 할 수 있어야 한다.
//  */

type FetchArguments = [URL | string, RequestInit | undefined];

type ReturnFetchDefaultOptions = {
  baseUrl?: URL | string;
  headers?: HeadersInit;
  version?: string;
  interceptors?: {
    request?: (config: FetchArguments) => Promise<FetchArguments>;
    response?: (response: Response) => Promise<Response>;
  };
};

export const createFetch = (defaultOptions?: ReturnFetchDefaultOptions) => {
  return async (...args: Parameters<typeof fetch>): Promise<Response> => {
    let [input, init] = args as FetchArguments;

    const headers = new Headers(init?.headers || {});
    if (defaultOptions?.headers) {
      new Headers(defaultOptions.headers).forEach((value, key) => {
        headers.set(key, value);
      });
    }

    if (defaultOptions?.baseUrl) {
      const baseUrl = new URL(defaultOptions.baseUrl.toString());
      if (defaultOptions?.version) {
        const versionUrl = new URL(defaultOptions.version, baseUrl);
        const inputUrl = new URL(input.toString(), versionUrl);
        input = inputUrl.toString();
      } else {
        const inputUrl = new URL(input.toString(), baseUrl);
        input = inputUrl.toString();
      }
    }

    let finalInit: RequestInit = {
      ...init,
      headers,
    };

    if (defaultOptions?.interceptors?.request) {
      const interceptedArgs = await defaultOptions.interceptors.request([
        input,
        finalInit,
      ]);
      input = interceptedArgs[0] ?? input;
      finalInit = interceptedArgs[1] ?? finalInit;
    }

    let response = await fetch(input, finalInit);

    if (defaultOptions?.interceptors?.response) {
      response = await defaultOptions.interceptors.response(response);
    }

    return response;
  };
};
