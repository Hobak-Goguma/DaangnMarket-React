import { TokenPayload } from '@payloads/token/TokenPayload';
import EitherResponse from '@services/EitherResponse';

import BaseRequester from '../BaseRequester';

export default class TokenRequester extends BaseRequester {
  async getToken({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    console.log('들어옴');
    return await this.call<TokenPayload>('/api/token/', {
      method: 'post',
      data: { username, password },
      timeout: 5000,
    });
  }
}
