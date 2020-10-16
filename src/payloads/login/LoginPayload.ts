export interface LoginErrorPayload {
  detail: string;
  code: string;
  messages: Array<{
    tokenClass: string;
    tokenType: string;
    message: string;
  }>;
}

export interface LoginPayload {
  idMember: number;
  userId: string;
  name: string;
  nickName: string;
  tel: string;
  lastDate: string;
  image: string | null;
}
