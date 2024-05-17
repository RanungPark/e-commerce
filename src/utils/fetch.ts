type Method = 'GET' | 'POST' | 'PETCH' | 'PUT' | 'DELITE';
type Body = {} | null;
export type Headers = {
  key: string;
  value: string;
};

type FetchUtil = (
  baseUrl: string,
  headers: Headers[]
) => (
  version: string
) => (endpoint: string, method?: Method, body?: Body) => void;

export const createFetch: FetchUtil =
  (baseUrl, headers) =>
  version =>
  async (endpoint, method = 'GET', body = null) => {
    const requestHeaders: HeadersInit = new Headers();

    for (const { key, value } of headers) {
      requestHeaders.set(key, value);
    }

    const requestUrl = `${baseUrl}/${version}/${endpoint}`;

    const options = {
      method,
      headers: {
        ...requestHeaders,
      },
      body: body ? JSON.stringify(body) : null,
    };

    const response = await fetch(requestUrl, options);
    const json = await response.json();
    console.log(json);
  };



/**
 * - 서버 마다 인스턴스 설정이 가능 해야한다.
 *    - 인스턴스마다 다른 헤더 값 또는 다른 설정 값들을 줄 수 있어야한다.
 * - API versioning 가능해야한다.
 * - intercept 가능
 */
