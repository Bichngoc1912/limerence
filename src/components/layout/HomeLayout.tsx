import React from 'react';
import Header from '@/components/header';
import { LayoutPropsInterface } from './types';
import Image from 'next/image';
import bgImage from '@/assets/images/kakashi.jpg'

export default function HomeLayout({ children }: LayoutPropsInterface) {
  return (
    <div className="bg-gray-50 h-screen font-serif">
      <Header />
      <div className="w-full h-96 md:h-3/4">
        <div className="bg-[url('../../src/assets/images/bau-troi.jpg')] bg-no-repeat items-center w-full h-full bg-cover flex">
          <div className="text-center text-sm md:text-base p-4 lg:w-2/4">
            <span>| 29-04-2022 | <br /> Không ai ưu tú hoặc kém cỏi hơn ai cả. <br/>Chúng ta chỉ là đang cố gắng hết sức trong hoàn cảnh và khả năng của mình..</span>
          </div>
        </div>
      </div>
      <div className='max-w-4xl my-0 mx-auto'>
        {children}
      </div>
    </div>
  );
}
