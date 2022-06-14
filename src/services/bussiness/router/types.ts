export const ROUTER_NAME = {
  HOME: 'home',
  BOOK: 'book',
  BOOK_DETAIL: 'bookDetail',
  CONFIDE_DETAIL: 'confideDetail',
  CHORE: 'chore',
  CHORE_DETAIL: 'choreDetail',
  ABOUT: 'about',
  DEV: 'dev',
  DEV_DETAIL: 'devDetail',
} as const;

export type RouterNameType = 
| typeof ROUTER_NAME.ABOUT
| typeof ROUTER_NAME.BOOK
| typeof ROUTER_NAME.CHORE
| typeof ROUTER_NAME.DEV
| typeof ROUTER_NAME.HOME
| typeof ROUTER_NAME.BOOK_DETAIL
| typeof ROUTER_NAME.CHORE_DETAIL
| typeof ROUTER_NAME.CONFIDE_DETAIL
| typeof ROUTER_NAME.DEV_DETAIL;

export const ROUTER_PATH_NAME = {
  [ROUTER_NAME.HOME]: '/',
  [ROUTER_NAME.ABOUT]: '/about',
  [ROUTER_NAME.BOOK]: '/book',
  [ROUTER_NAME.CHORE]: '/chore',
  [ROUTER_NAME.DEV]: '/dev',
  [ROUTER_NAME.BOOK_DETAIL]: '/book/[id]',
  [ROUTER_NAME.CHORE_DETAIL]: '/chore/[id]',
  [ROUTER_NAME.CONFIDE_DETAIL]: '/confide/[id]',
  [ROUTER_NAME.DEV_DETAIL]: '/dev/[id]'
}