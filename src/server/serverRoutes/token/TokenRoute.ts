import {
  Config,
  RouteNext,
  RouteRequest,
  RouteResponse,
} from '@payloads/common/Next';
import { TokenPayload } from '@payloads/token/TokenPayload';
import TokenRequester from '@requesters/token/TokenRequester';
import EitherResponse from '@services/EitherResponse';
import autoBind from 'auto-bind';
import debug from 'debug';

import CommonRoute from '../CommonRoute';

const log = debug('Luna:TokenRoute');

export default class TokenRoute extends CommonRoute {
  private requester: TokenRequester = new TokenRequester({
    isFromServer: true,
  });

  constructor(private config: Config) {
    super('/api/token');
    autoBind(this);
  }

  async get(req: RouteRequest, res: RouteResponse, next: RouteNext) {
    next();
  }

  async post(req: RouteRequest, res: RouteResponse, next: RouteNext) {
    log('get');

    const config = this.config;
    const payload = (await this.requester.getToken({
      username: req.body.username,
      password: req.body.password,
    })) as EitherResponse<TokenPayload>;

    payload.caseOf({
      left: next,
      right: (r) => {
        config.accessToken = r.data.access;
        config.refreshToken = r.data.refresh;

        res.status(200);
        res.end(JSON.stringify(r.data));
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
