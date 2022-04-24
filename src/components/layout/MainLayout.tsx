import React from 'react';
import Header from '@/components/header';
import { LayoutPropsInterface } from './types';

export default function MainLayout({ children }: LayoutPropsInterface) {
  return (
    <div className="bg-gray-50 h-screen font-serif">
      <Header />
      <div className='max-w-4xl my-0 mx-auto'>
        {children}
      </div>
    </div>
  );
}
