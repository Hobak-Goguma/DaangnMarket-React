import { TokenErrorPayload, TokenPayload } from '@payloads/token/TokenPayload';
import debug from 'debug';

import BaseRequester, { RequesterProps } from '../BaseRequester';

const log = debug('Luna:TokenRequester');

export default class TokenRequester extends BaseRequester {
  constructor(props?: RequesterProps) {
    super(props);
  }

  async getToken({
    username = '',
    password = '',
  }: {
    username: string;
    password: string;
  }) {
    log('getToken');

    return await this.call<TokenErrorPayload, TokenPayload>('/api/token/', {
      method: 'post',
      data: { username, password },
      fallbackUrl: '/api/token',
    });
  }
}
