import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/react';
import { ReactElement } from 'react';
import { ExecOptionsWithStringEncoding } from 'child_process';

export interface LayoutPropsInterface {
  children: React.ReactElement;
}

export type NextPageWithLayout = NextPage & {
  Layout: (props: LayoutPropsInterface) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

interface AnnotationsInterface {
  bold: boolean;
  code: boolean;
  color: string;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
}
interface RichTextInterface {
  annotations: AnnotationsInterface;
  href: any;
  plain_text: string;
  text: {
    content: string;
    link: string;
  };
  type: string;
}
export interface PropertiesInterface {
  article: {
    id: string;
    title: RichTextInterface[];
    type: string;
  };
  category: {
    id: string;
    rich_text: RichTextInterface[];
    type: string;
  };
  description: {
    id: string;
    rich_text: RichTextInterface[];
    type: string;
  };
  image: {
    id: string;
    type: string;
    url: string;
  };
  show: {
    checkbox: boolean;
    id: string;
    type: string;
  };
  tags: {
    id: string;
    multi_select: {
      color: string;
      id: string;
      name: string;
    }[];
    type: string;
  };
  time: {
    created_time: string;
    id: string;
    type: string;
  };
  title: {
    id: string;
    rich_text: RichTextInterface[];
    type: string;
  };
  url: string;
}
export interface ArticleItemInterface {
  archived: boolean;
  cover: any;
  created_by: {
    object: string;
    id: string;
  };
  created_time: string;
  icon: any;
  id: string;
  last_edited_by: {
    object: string;
    id: string;
  };
  last_edited_time: string;
  object: string;
  parent: {
    database_id: string;
    type: ExecOptionsWithStringEncoding;
  };
  properties: PropertiesInterface;
}

export interface ArticleListInterface {
  has_more: boolean;
  next_cursor: any;
  object: string;
  page: any;
  results: ArticleItemInterface[];
  type: string;
}
