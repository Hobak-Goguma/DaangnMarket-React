import EitherResponse from '@services/EitherResponse';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosDebugLog from 'axios-debug-log';
import debug from 'debug';

axiosDebugLog({
  request: (debug, config) => {
    console.log('config');
    console.dir(config);
    debug('Requested with');
    debug(config);
  },
  response: (debug, response) => {
    debug('Response with');
    debug(response);
  },
  error: (debug, error) => {
    console.log('error');
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
      return EitherResponse.Left<null>({
        data: null,
        status: error.status || 400,
        statusText: error.statusText || 'Unknown Error',
      });
    }
  }

  // TODO: get 과 post 를 합치면서 try-catch 를 좀 더 괜찮게 바꿀 수 있는 방법을 모색해보자
  async get<T>(url: string, config: APIRequestConfig) {
    try {
      const res = await axios.get<T>(url, config);

      if (this.isClientError(res.status) || this.isServerError(res.status)) {
        throw this.pick(res);
      }

      return EitherResponse.Right(this.pick(res));
    } catch (error) {
      return EitherResponse.Left<null>({
        data: null,
        status: error.status || 400,
        statusText: error.statusText || 'Unknown Error',
      });
    }
  }

  async post<T>(url: string, config: APIRequestConfig) {
    try {
      const res = await axios.post<T>(url, config);

      if (this.isClientError(res.status) || this.isServerError(res.status)) {
        throw this.pick(res);
      }

      return EitherResponse.Right(this.pick(res));
    } catch (error) {
      // console.error(error);
      return EitherResponse.Left<null>({
        data: null,
        status: error.status || 400,
        statusText: error.statusText || 'Unknown Error',
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
