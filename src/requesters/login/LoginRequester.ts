import { LoginPayload } from '@payloads/login/LoginPayload';
import debug from 'debug';

import BaseRequester from '../BaseRequester';

const log = debug('Luna:LoginRequester');

export default class LoginRequester extends BaseRequester {
  async login({
    username = '',
    password = '',
  }: {
    username: string;
    password: string;
  }) {
    log('login');

    return await this.call<LoginPayload>('/member/login', {
      method: 'post',
      data: { username, password },
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      fallbackUrl: '/ff',
    });
  }
}
