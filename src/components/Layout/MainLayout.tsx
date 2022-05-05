import React from 'react';
import Header from '@/components/Header';
import { LayoutPropsInterface } from './types';
import Footer from '../Footer';

export default function MainLayout({ children }: LayoutPropsInterface) {
  return (
    <div className="bg-gray-50 h-auto font-serif">
      <Header />
      <div className="max-w-4xl my-0 mx-auto px-4">{children}</div>
      <Footer />
    </div>
  );
}
