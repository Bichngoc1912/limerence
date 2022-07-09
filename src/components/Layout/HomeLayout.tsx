import React from 'react';
import Header from '@/components/Header';
import { LayoutPropsInterface } from './types';
import Footer from '../Footer';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import homeImg from '@/assets/images/home-img-1.jpg';
import { useState } from 'react';

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function HomeLayout({ children }: LayoutPropsInterface) {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  return (
    <div className="tw-bg-gray-100 tw-font-serif tw-relative tw-h-screen">
      <Header isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      <div className=" tw-bg-gray-100">
        <div className="sm:tw-grid tw-block tw-my-8 tw-mx-auto xl:tw-max-w-6xl lg:tw-max-w-4xl sm:tw-max-w-2xl tw-max-w-sm tw-grid-cols-48">
          <div className="tw-rounded-3xl tw-flex tw-justify-center sm:tw-mb-0 tw-mb-4 sm:tw-mr-4 xl:tw-mr-0">
            <Image
              src={homeImg}
              alt="home img.."
              objectFit="cover"
              width={350}
              height={350}
              className="tw-rounded-2xl"
            />
          </div>

          <div className=" tw-flex tw-flex-col tw-justify-center tw-px-4 sm:tw-px-0">
            <p className="tw-font-semibold tw-text-slate-700 sm:tw-text-xl tw-text-lg tw-mb-4">
              我们这一生很短，我们终将会失去它，所以不妨大胆一点，爱一个人，攀一座山，追一次梦，不妨大胆一点，有很多事没有答案。
            </p>

            <p className="tw-text-slate-700 tw-mb-4">
              Cuộc đời này của chúng ta ngắn ngủi lắm, chung quy rồi cũng sẽ mất đi thôi,
              cho nên hãy gan dạ lên nhé. Yêu một người, trèo lên một ngọn núi, theo đuổi
              ước mơ của mình. Nếu không mạnh dạn lên thì sẽ lỡ đáp án của nhiều chuyện
              lắm đấy.
            </p>

            <p className="tw-text-slate-800">._SG_. 09-07-2022</p>
          </div>
        </div>
        <div className="tw-flex tw-justify-center tw-mb-8">
          <hr style={{ height: 2, width: 300, background: 'black' }} />
        </div>
        <div className="xl:tw-max-w-6xl sm:tw-max-w-2xl lg:tw-max-w-4xl tw-max-w-sm tw-my-0 tw-mx-auto">
          {children}
        </div>
      </div>
      <Footer />
      {isOpenSidebar && (
        <Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      )}
    </div>
  );
}
