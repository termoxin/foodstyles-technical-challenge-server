import { Router } from 'express';

export interface IRoutes {
  router: Router;
  initRoutes(): void 
}