import { ArticleListInterface } from '@/types/common';

export interface BlogCardPropsInterface {
  data: ArticleListInterface;
  onClick: (param?: any) => void;
}
