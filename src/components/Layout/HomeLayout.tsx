import React from 'react';
import Header from '@/components/Header';
import { LayoutPropsInterface } from './types';
import Footer from '../Footer';

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function HomeLayout({ children }: LayoutPropsInterface) {
  return (
    <div className="tw-bg-gray-100 tw-font-serif">
      <Header />
      <div className="tw-w-full tw-h-screen tw-mb-4">
        <div className="tw-bg-[url('../../src/assets/images/bau-troi.jpg')] tw-bg-no-repeat tw-items-center tw-w-full tw-h-full tw-bg-cover tw-flex">
          <div className="tw-text-center tw-text-sm md:tw-text-base tw-p-4 lg:tw-w-2/4">
            <span>
              | 29-04-2022 | <br /> Không ai ưu tú hoặc kém cỏi hơn ai cả. <br />
              Chúng ta chỉ là đang cố gắng hết sức trong hoàn cảnh và khả năng của mình..
            </span>
          </div>
        </div>
      </div>
      <div className=" tw-bg-gray-100">
        <div className="tw-max-w-4xl tw-my-0 tw-mx-auto">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
