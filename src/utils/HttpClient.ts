/**
 * 쿼리 매개변수의 타입
 * 키는 숫자 또는 문자열이다
 * 값은 어떠한 타입이든 될 수 있다.
 */
export type QueryParamsType = Record<string | number, any>;

/**
 * 응답의 예상 형식을 나타낸다
 * body와 bodyUsed를 제외한 Body인터페이스의 모든 키이다
 */
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

/**
 * HTTP요청을 만들기 위한 매개변수 집합
 * body를 제외한 RequestInit의 기본 매개변수에 필요한 정보의 인터페이스를 상속받는다
 * 추가적으로 요청에 필요한 정보
 *secure: 보안이 필요한지 여부
  path: 요청 URL 경로
  type: 요청 콘텐츠 유형
  query: 쿼리 매개변수
  format: 응답의 예상 형식
  body: body값
  baseUrl: 기본 요청 URL 변경하고 싶은 값
  cancelToken: 요청을 취소하기 위한 토큰
 */
export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  secure?: boolean;
  path: string;
  type?: ContentType;
  query?: QueryParamsType;
  format?: ResponseFormat;
  body?: unknown;
  baseUrl?: string;
  cancelToken?: CancelToken;
}

/**
 * FullRequestParams에서 body, method, query, path를 제외한 매개변수의 하위 집합
 */
export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

/**
 * 생성자함수의 매개변수 정의
 * baseUrl: 기본 URL
 * baseApiParams: 기본 API 매개변수 RequestParams baseUrl, cancelToken, signal 제외한 매개변수의 하위 집합
 {cache?: RequestCache;
 credentials?: RequestCredentials;
 headers?: HeadersInit;
 integrity?: string;
 keepalive?: boolean;
 mode?: RequestMode;
 priority?: RequestPriority;
 redirect?: RequestRedirect;
 referrer?: string;
 referrerPolicy?: ReferrerPolicy;
 window?: null;
 secure?: boolean;
 type?: ContentType;
 format?: ResponseFormat;}
 * securityWorker: 보안 데이터 처리하는 함수
 * customFetch: 사용자 정의 fetch 함수
 */
export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

/**
 * 오류 응답에 대한 정의
 */
export interface ErrorResponse {
  error: {
    code: string;
    message: string;
  };
  status: number;
}

/**
 * HTTP응답을 정의 D와 E를 사용해 데이터와 오류 타입 정의
 */
export interface HttpResponse<D, E> extends Response {
  data: D;
  error: E;
}

/**
 * 요청 취소를 위한 토큰 정의
 */
type CancelToken = Symbol | string | number;

/**
 * 요청의 콘텐츠 유형
 * Content-Type은 클라이언트에게 반환된 컨텐츠의 유형이 실제로 무엇인지 알려준다.
 */
export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
}

export class HttpClient<SecurityDataType = unknown> {
  /**
   * HttpClient인스턴스
   * baseUrl은 public임으로 인스턴스를 통하여 재정의 가능
   */
  public baseUrl: string = '/';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  /**
   * HTTPClient인스턴스를 초기화한다.
   * @param apiConfig 
   * -> baseURL, baseAPIParams, securityWorker, customFetch
   */
  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  /**
   * 보안 데이터를 설정한다.
   * @param data
   */
  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  /**
   * 쿼리 매개변수를 URL에 인코딩 한다.
   * @param key 쿼리 매개변수의 키
   * @param value 쿼리 매개변수의 값
   * @returns 인코딩한 값
   */
  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === 'number' ? value : `${value}`
    )}`;
  }

  /**
   * 쿼리 매개변수를 추가한다.
   * @param query 쿼리 매개변수의 객체 (쿼리 매개변수 타입으로 키는 숫자와 문자열로 이루어지며 값은 어떤한 타입도 올 수 있다.)
   * @param key 추가할 매개변수의 키
   * @returns 인코딩쿼리파람 함수에서 반환된 인코딩된 쿼리 매개변수
   */
  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  /**
   * 배얄 형식의 쿼리 매개변수를 추가한다.
   * @param query 쿼리 매개변수의 객체
   * @param key 추가할 매개변수의 키
   * @returns 배열을 map을 통해 인코딩 된 매개변수로 아루어진 새로운 배열로 반환후 join을 통해 &으로 연결한다. 
   */
  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  /**
   * 쿼리 매개변수 객체를 쿼리 문자열로 반환
   * 쿼리는 빈 객체일 수도 있음
   * 쿼리 매개변수 객체가 입력이 되었다면 
   * @param rawQuery
   * @returns
   */
  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      key => 'undefined' !== typeof query[key]
    );
    return keys
      .map(key =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&');
  }

  /**
   * 쿼리 매개션수를 추가하여 ?key = value & ... 을 추가한다
   * @param rawQuery
   * @returns
   */
  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  /**
   * 
   */
  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          'image',
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property) 
              : `${property}`
        );
        return formData;
      }, new FormData()),
  };

  /**
   * 두개의 요청 매개변수를 병합한다.      
   * @param params1 첫 번째 요청 매개변수
   * @param params2 두 번째 요청 매개변수 선택사항
   * @returns 
   */
  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  /**
   * HTTP 요청을 수행
   * @param param0 
   * @returns 
   */
  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = 'json',
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
      
      /**
       * 매개변수 병합한 값
       */
    const requestParams = this.mergeRequestParams(params, secureParams);
      /**
       * 쿼리 매개변수 값
       */
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    /**
     * 요청 컨텐츠 유형
     */
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      /**
       * 커스텀한 fetch타입
       * 첫번째 매개변수로 요청 URL
       * 두번째 매개변수로 요청 본문
       */
      `${baseUrl || this.baseUrl || ''}${path}${
        queryString ? `?${queryString}` : ''
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
        },
        body: typeof body == 'undefined' ? null : payloadFormatter(body),
      }
      /**
       * 
       */
    ).then(async response => {
      const res = response as HttpResponse<T, E>;
      res.data = null as unknown as T;
      res.error = null as unknown as E;

      const data = !responseFormat
        ? res
        : await response[responseFormat]()
            .then(data => {
              if (res.ok) {
                res.data = data;
              } else {
                res.error = data;
              }
              return res;
            })
            .catch(e => {
              res.error = e;
              return res;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) {
        throw data;
      }
      return data.data;
    });
  };
}
