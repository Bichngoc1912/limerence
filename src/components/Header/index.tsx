import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import facebookIcon from '@/assets/images/icons/facebook.png';
import githubIcon from '@/assets/images/icons/github.png';
import linkedinIcon from '@/assets/images/icons/linkedin.png';
import menuIcon from '@/assets/images/icons/menu.png';
import Image from 'next/image';
import { HeaderProps } from './types';
import { ThemeModeSelect } from '@/components/ThemeModeSelected';

function Header(props: HeaderProps) {
  const { setIsOpenSidebar, isOpenSidebar } = props;

  const router = useRouter();

  const handleClickLogo = () => {
    return router.push('/');
  };

  const mediaSociaList = useMemo(() => {
    const iconList = [
      {
        id: 0,
        src: facebookIcon,
        href: 'https://www.facebook.com/profile.php?id=100039248978194',
      },
      {
        id: 1,
        src: githubIcon,
        href: 'https://github.com/Bichngoc1912',
      },
      {
        id: 2,
        src: linkedinIcon,
        href: 'https://www.linkedin.com/in/bich-ngoc-b36929200/',
      }
    ];

    return iconList;
  }, []);

  const renderMediaSociaList = mediaSociaList.map(item => {
    return (
      <div key={item.id} className="hover:tw-rounded-full hover:tw-bg-gray-300 hover:tw-cursor-pointer tw-w-8 h-8 tw-content-center tw-justify-center tw-flex">
        <a
          href={item.href}
          className="tw-flex tw-justify-center" 
          target={'_blank'}
          rel="noreferrer"
        >
        <div className="tw-flex tw-justify-center">
          <Image
            src={item.src}
            width={20}
            height={20}
            alt="facebook icon"
            objectFit="contain"
          />
        </div>
      </a>
    </div>
    )
  })

  const handleClickMenuIcon = () => {
    setIsOpenSidebar(!isOpenSidebar);
  }

  return (
    <div className="tw-h-16 tw-border-b tw-border-gray-300 dark:tw-border-gray-500 tw-z-20 tw-w-full tw-bg-gray-50 dark:tw-bg-slate-700 tw-flex tw-justify-center tw-items-center tw-sticky tw-top-0">
      <div className="tw-max-w-6xl tw-pl-2 tw-pr-2 tw-w-full tw-my-0 tw-mx-auto tw-flex tw-justify-between tw-items-center">
        <div
          className="tw-font-[ms-madi] tw-text-lg  tw-text-blue-500 hover:tw-cursor-pointer"
          onClick={handleClickLogo}
        >
          .bngocblog.
        </div>
        <div className="tw-flex">
          <div className="tw-grid tw-grid-cols-5 tw-gap-2 tw-mr-8">
            {renderMediaSociaList}

            <div></div>
            <div className="hover:tw-cursor-pointer tw-w-8 tw-h-8 tw-content-center tw-flex tw-justify-center tw-relative">
              <ThemeModeSelect className="" />
            </div>
          </div>

          <div
            className="hover:tw-cursor-pointer tw-flex tw-justify-center tw-items-center"
            onClick={handleClickMenuIcon}
          >
            <Image src={menuIcon} alt="menu icon" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
