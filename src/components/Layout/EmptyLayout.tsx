import { LayoutPropsInterface } from '@/types/common';
import Footer from '../Footer';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useState } from 'react';

function EmptyLayout({ children }: LayoutPropsInterface) {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  return (
    <div className='tw-bg-gray-100 tw-font-serif'>
      <Header setIsOpenSidebar={() => setIsOpenSidebar(!isOpenSidebar)} isOpenSidebar={isOpenSidebar} />
      <div className='tw-my-8 tw-mx-auto xl:tw-max-w-6xl lg:tw-max-w-4xl sm:tw-max-w-2xl tw-max-w-sm'>
        {children}
      </div>
      <Footer />
      {isOpenSidebar && (<Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar}/>)}
    </div>
  );
}

export default EmptyLayout;
