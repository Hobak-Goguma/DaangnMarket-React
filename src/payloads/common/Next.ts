import { IncomingMessage } from 'http';

import { NextFunction, Request, Response } from 'express';
import { Params, ParamsDictionary } from 'express-serve-static-core';
import {
  NextApiRequest,
  NextApiResponse,
  NextComponentType,
  NextPageContext,
} from 'next';

export interface Config {
  accessToken?: string;
  refreshToken?: string;
}

export interface CustomRequest extends Omit<NextPageContext, 'res'> {
  req?: IncomingMessage & Config;
}

// export interface

export type RouteRequest<T extends Params = ParamsDictionary> = Request<T> &
  Config;

export interface RouteResponse<P = any> extends Response<P> {}

export interface RouteNext extends NextFunction {}

export interface ApiControllerRequest extends NextApiRequest, Config {}

export interface ApiControllerResponse extends NextApiResponse {}

export interface InitialPropsRequest extends IncomingMessage, CustomRequest {}

export type LunaPage<P = {}, IP = P> = NextComponentType<CustomRequest, IP, P>;
