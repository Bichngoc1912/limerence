import React from 'react';
import Header from '@/components/Header';
import { LayoutPropsInterface } from './types';
import Footer from '../Footer';

export default function MainLayout({ children }: LayoutPropsInterface) {
  return (
    <div className="tw-bg-gray-100 tw-min-h-screen tw-font-serif">
      {/* <Header /> */}
      <div className="tw-max-w-6xl tw-my-0 tw-mx-auto tw-px-4">{children}</div>
      <Footer />
    </div>
  );
}
