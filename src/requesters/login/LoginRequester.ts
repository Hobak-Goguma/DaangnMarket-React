import { LoginErrorPayload, LoginPayload } from '@payloads/login/LoginPayload';
import debug from 'debug';

import BaseRequester from '../BaseRequester';

const log = debug('Luna:LoginRequester');

export default class LoginRequester extends BaseRequester {
  async login(accessToken?: string) {
    log('login');

    return await this.call<LoginErrorPayload, LoginPayload>('/member/login/', {
      method: 'post',
      ...(this.isFromServer && {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      fallbackUrl: '/api/login',
    });
  }
}
