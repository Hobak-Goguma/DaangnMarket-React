import URL from 'url';

import { CustomRequest } from '@payloads/common/Next';
import debug from 'debug';

import APIRequester, { APIRequestConfig } from './APIRequester';

const log = debug('Luna:BaseRequester');

export default class BaseRequester extends APIRequester {
  private protocol = 'http';
  private host = 'www.daangn.site';

  constructor(private req?: CustomRequest['req']) {
    super();
  }

  private format(url: string, fallbackUrl: string = ''): string {
    if (!this.req) {
      return fallbackUrl;
    }

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
    const endpoint = this.format(url, config.fallbackUrl);

    if (!method) {
      return this.reject({ warn: true, msg: 'HTTP Method is required' });
    }

    return this.reqeust<T>(endpoint, config);
  }
}
