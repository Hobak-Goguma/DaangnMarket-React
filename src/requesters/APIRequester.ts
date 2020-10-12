import EitherResponse from '@services/EitherResponse';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosDebugLog from 'axios-debug-log';
import debug from 'debug';

axiosDebugLog({
  request: (debug, config) => {
    // console.log('config');
    // console.dir(config);
    debug('Requested with');
    debug(config);
  },
  response: (debug, response) => {
    debug('Response with');
    debug(response);
  },
  error: (debug, error) => {
    // console.log('error');
    // console.dir(error)
    debug('Error caused by');
    debug(error);
  },
});

const log = debug('Luna:APIRequster');

export interface APIRequestConfig extends AxiosRequestConfig {}

export interface APIResponse<T>
  extends Pick<AxiosResponse<T>, 'data' | 'status' | 'statusText'> {}

export default class APIRequester {
  private isClientError(status: number) {
    return status >= 400 && status < 500;
  }

  private isServerError(status: number) {
    return status >= 500 && status < 500;
  }

  private pick<T>(res: AxiosResponse<T>): APIResponse<T> {
    return {
      data: res.data,
      status: res.status,
      statusText: res.statusText,
    };
  }

  async reqeust<T>(url: string, config: APIRequestConfig) {
    try {
      const res = (await axios({
        url,
        ...config,
      })) as AxiosResponse<T>;

      if (this.isClientError(res.status) || this.isServerError(res.status)) {
        throw this.pick(res);
      }

      return EitherResponse.Right(this.pick(res));
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
