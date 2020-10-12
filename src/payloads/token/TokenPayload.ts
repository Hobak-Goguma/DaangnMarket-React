export interface TokenPayload {
  refresh: string;
  access: string;
}

export interface TokenErrorPayload {
  detail: string;
}
