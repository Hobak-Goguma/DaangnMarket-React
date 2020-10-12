import URL from 'url';

import debug from 'debug';

import APIRequester, { APIRequestConfig } from './APIRequester';

const log = debug('Luna:BaseRequester');

export default class BaseRequester extends APIRequester {
  private protocol = 'http';
  private host = 'www.daangn.site';

  private format(url: string): string {
    return URL.format({
      protocol: this.protocol,
      host: this.host,
      pathname: url,
    });
  }

  // TODO: Left 타입에 대한 처리도 가능하게 변경하면 좋겠다
  async call<T>(url: string, config: APIRequestConfig) {
    log('call');

    const { method } = config;
    const endpoint = this.format(url);

    if (!method) {
      return this.reject({ warn: true, msg: 'HTTP Method is required' });
    }

    console.dir({
      url: endpoint,
      ...config,
    });

    return this.reqeust<T>(endpoint, config);

    // switch (method.toLowerCase()) {
    //   case 'get':
    //     return this.get<T>(endpoint, config);
    //   case 'post':
    //     return this.post<T>(endpoint, config);
    //   default:
    //     return this.reject({
    //       warn: true,
    //       msg: 'Method must be one of the HTTP methods',
    //     });
    // }
  }
}
