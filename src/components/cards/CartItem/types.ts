import { ArticleItemInterface } from '@/types/common';

export interface CardItemProps {
  data: ArticleItemInterface;
  handleRedirectToDetail: (id: string) => void;
}
