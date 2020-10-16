import { RouteNext, RouteRequest, RouteResponse } from '@payloads/common/Next';
import { Router } from 'express';

export default abstract class CommonRoute {
  protected router: Router = Router();

  constructor(private path: string) {}

  abstract get(req: RouteRequest, res: RouteResponse, next: RouteNext): void;

  abstract post(req: RouteRequest, res: RouteResponse, next: RouteNext): void;

  abstract export(): Router;

  get Path() {
    return this.path;
  }
}
