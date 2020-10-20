import {
  Config,
  RouteNext,
  RouteRequest,
  RouteResponse,
} from '@payloads/common/Next';
import { LoginErrorPayload, LoginPayload } from '@payloads/login/LoginPayload';
import LoginRequester from '@requesters/login/LoginRequester';
import autoBind from 'auto-bind';
import debug from 'debug';

import CommonRoute from '../CommonRoute';

const log = debug('Luna:LoginRoute');

export default class LoginRoute extends CommonRoute {
  private requester: LoginRequester = new LoginRequester({
    isFromServer: true,
  });

  constructor(private config: Config) {
    super('/api/login');
    autoBind(this);
  }

  async get(req: RouteRequest, res: RouteResponse, next: RouteNext) {
    next();
  }

  async post(req: RouteRequest, res: RouteResponse, next: RouteNext) {
    log('post');

    const config = this.config || {};
    const { accessToken } = config;
    const payload = await this.requester.login(accessToken);

    // @ts-expect-error
    payload.caseOf<LoginErrorPayload, LoginPayload>({
      left: next,
      right: () => {
        res.status(200).end();
      },
    });
  }

  export() {
    log(`export ${this.Path}`);
    this.router.get(this.Path, this.get);
    this.router.post(this.Path, this.post);

    return this.router;
  }
}
