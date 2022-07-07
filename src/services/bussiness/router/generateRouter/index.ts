import { ROUTER_NAME, ROUTER_PATH_NAME } from '../types';
import { RouterParamType, GeneratePageDetailRouterInterface } from './types';

export const generateHomeRouter = (): RouterParamType => {
  const routerName = ROUTER_NAME.HOME;

  return {
    routerName,
    pathname: ROUTER_PATH_NAME[routerName],
    asPath: ROUTER_PATH_NAME[routerName],
  };
};

export const generateDevDetailRouter = (
  param?: GeneratePageDetailRouterInterface,
): RouterParamType => {
  if (typeof param?.id !== 'string' || !param.id) return;

  const routerName = ROUTER_NAME.DEV_DETAIL;
  const pathname = ROUTER_PATH_NAME[routerName];
  const asPath = pathname.replace('[id]', param.id);

  return {
    routerName,
    pathname,
    asPath,
  };
};

export const generateBookDetailRouter = (
  param?: GeneratePageDetailRouterInterface,
): RouterParamType => {
  if (typeof param?.id !== 'string' || !param.id) return;

  const routerName = ROUTER_NAME.BOOK_DETAIL;
  const pathname = ROUTER_PATH_NAME[routerName];
  const asPath = pathname.replace('[id]', param.id);

  return {
    routerName,
    pathname,
    asPath,
  };
};

export const generateConfideDetailRouter = (
  param?: GeneratePageDetailRouterInterface,
): RouterParamType => {
  if (typeof param?.id !== 'string' || !param.id) return;

  const routerName = ROUTER_NAME.CONFIDE_DETAIL;
  const pathname = ROUTER_PATH_NAME[routerName];
  const asPath = pathname.replace('[id]', param.id);

  return {
    routerName,
    pathname,
    asPath,
  };
};
