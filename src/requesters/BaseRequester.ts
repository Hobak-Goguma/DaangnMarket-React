import URL from 'url';

import { Config } from '@payloads/common/Next';
import debug from 'debug';

import APIRequester, { APIRequestConfig } from './APIRequester';

const log = debug('Luna:BaseRequester');

export interface RequesterProps extends Config {
  isFromServer: boolean;
}

export default class BaseRequester extends APIRequester {
  private protocol = 'http';
  private host = 'www.daangn.site';

  constructor(private props?: RequesterProps) {
    super();
  }

  protected get accessToken() {
    log(`accessToken: ${this.props?.accessToken}`);
    return this.props?.accessToken ?? '';
  }

  protected get refreshToken() {
    log(`refreshToken: ${this.props?.refreshToken}`);
    return this.props?.refreshToken ?? '';
  }

  protected get isFromServer() {
    return !!this.props?.isFromServer;
  }

  private format(url: string, fallbackUrl: string = ''): string {
    if (!this.isFromServer) {
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
