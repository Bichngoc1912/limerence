import React from 'react';
import Header from '@/components/Header';
import { LayoutPropsInterface } from './types';
import Footer from '../Footer';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import bgateImage from '@/assets/images/bgate.jpg';
import Image from 'next/image';

export default function MainLayout({ children }: LayoutPropsInterface) {

  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  return (
    <div className="tw-bg-gray-100 tw-min-h-screen tw-font-serif">
      <Header isOpenSidebar={isOpenSidebar} setIsOpenSidebar={() => setIsOpenSidebar(!isOpenSidebar)} />
      <div className='tw-my-8 tw-mx-auto xl:tw-max-w-6xl lg:tw-max-w-4xl sm:tw-max-w-2xl tw-max-w-sm'>
        <Image src={bgateImage} alt='Home img ....' height={460} objectFit='cover' className='tw-rounded-2xl'/>
      </div>
      <div className="tw-max-w-6xl tw-my-0 tw-mx-auto tw-px-4">{children}</div>
      <Footer />
      {isOpenSidebar && <Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />}
    </div>
  );
}
