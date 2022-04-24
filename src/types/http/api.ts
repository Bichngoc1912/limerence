export interface ApiResponseInterface<T = any> {
  code: number;
  message: string;
  payload?: T;
}
