import { RouterNameType } from '../types';

export interface RouterParamInterface {
  routerName: RouterNameType;
  pathname: string;
  asPath: string;
}

export type RouterParamType = RouterParamInterface | undefined;

export interface GeneratePageDetailRouterInterface {
  id: string;
}
