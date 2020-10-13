import EitherResponse, { Value } from '@services/EitherResponse';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import debug from 'debug';

/** 디버깅 할 때 사용 */
// import axiosDebugLog from 'axios-debug-log';
// axiosDebugLog({
//   request: (debug, config) => {
//     debug('Requested with');
//     debug(config);
//   },
//   response: (debug, response) => {
//     debug('Response with');
//     debug(response);
//   },
//   error: (debug, error) => {
//     debug('Error caused by');
//     debug(error);
//   },
// });

const log = debug('Luna:APIRequster');

export interface APIRequestConfig extends AxiosRequestConfig {
  fallbackUrl?: string;
}

export default class APIRequester {
  private isClientError(status: number) {
    return status >= 400 && status < 500;
  }

  private isServerError(status: number) {
    return status >= 500 && status < 500;
  }

  private pick<T>(res: AxiosResponse<T>): Value<T> {
    return {
      data: res.data,
      status: res.status,
      statusText: res.statusText,
    };
  }

  async reqeust<T>(url: string, config: APIRequestConfig) {
    log('request');

    try {
      const res = (await axios({
        ...config,
        url,
        timeout: 5000,
      })) as AxiosResponse<T>;

      if (this.isClientError(res.status) || this.isServerError(res.status)) {
        throw this.pick(res);
      }

      return EitherResponse.Right<T>(this.pick(res));
    } catch (error) {
      const { response } = error;
      return EitherResponse.Left<null>({
        data: response?.data ?? null,
        status: response?.status || 400,
        statusText: response?.statusText || 'Unknown Error',
      });
    }
  }

  reject(p?: { warn: boolean; msg: string }) {
    log('reject');

    if (p?.warn) {
      log(p.msg);
    }
    return EitherResponse.Left<null>({
      data: null,
      status: 400,
      statusText: p?.msg ?? 'Unknown Error',
    });
  }
}
