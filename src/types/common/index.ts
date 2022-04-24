import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/react';
import { ReactElement } from 'react';

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
