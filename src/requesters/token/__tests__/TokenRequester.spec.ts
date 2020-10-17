import { TokenErrorPayload, TokenPayload } from '@payloads/token/TokenPayload';
import EitherResponse from '@services/EitherResponse';

import TokenRequester from '../TokenRequester';

describe('TokenRequester', () => {
  let requester: TokenRequester;
  beforeEach(() => {
    requester = new TokenRequester({ isFromServer: true });
  });

  describe('데이터를 불러오기 성공', () => {
    it('맞는 username, password 를 넘기면 토큰을 받아온다', async (done) => {
      const res = (await requester.getToken({
        username: 'ddusi',
        password: '1234',
      })) as EitherResponse<TokenPayload>;

      const payload = res.pickRight((d) => d.data);

      expect(typeof payload.access).toBe('string');
      expect(typeof payload.refresh).toBe('string');
      done();
    });
  });

  describe('데이터 불러오기 실패', () => {
    it('id 를 잘못 입력하면 에러를 받는다', async (done) => {
      const res = (await requester.getToken({
        username: 'zzz',
        password: '1234',
      })) as EitherResponse<TokenErrorPayload>;

      const payload = res.pickLeft((d) => d.data);

      expect(typeof payload.detail).toBe('string');
      done();
    });

    it('pw 를 잘못 입력하면 에러를 받는다', async (done) => {
      const res = (await requester.getToken({
        username: 'ddusi',
        password: 'hi',
      })) as EitherResponse<TokenErrorPayload>;

      const payload = res.pickLeft((d) => d.data);

      expect(typeof payload.detail).toBe('string');
      done();
    });
  });
});
