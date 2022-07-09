import React from 'react';
import { useRouter } from 'next/router';
import facebookIcon from '@/assets/images/icons/facebook.png';
import githubIcon from '@/assets/images/icons/github.png';
import linkedinIcon from '@/assets/images/icons/linkedin.png';
import menuIcon from '@/assets/images/icons/menu.png';
import Image from 'next/image';
import { HeaderProps } from './types';

function Header(props: HeaderProps) {
  const { setIsOpenSidebar, isOpenSidebar } = props;

  const router = useRouter();
  
  const handleClickLogo = () => {
    return router.push('/');
  };

  return (
    <div className="tw-h-16 tw-border-b tw-border-gray-300 tw-z-20 tw-w-full tw-bg-gray-50 tw-flex tw-justify-center tw-items-center tw-sticky tw-top-0">
      <div className="tw-max-w-6xl tw-pl-2 tw-pr-2 tw-w-full tw-my-0 tw-mx-auto tw-flex tw-justify-between tw-items-center">
        <div
          className="tw-font-[ms-madi] tw-text-lg  tw-text-blue-500 hover:tw-cursor-pointer"
          onClick={handleClickLogo}
        >
          .bngocblog.
        </div>
        <div className="tw-grid tw-grid-cols-3 tw-gap-2">
          <div className="hover:tw-rounded-full hover:tw-bg-gray-300 hover:tw-cursor-pointer tw-w-8 h-8 content-center tw-flex tw-justify-center">
            <Image
              src={facebookIcon}
              width={20}
              height={20}
              alt="facebook icon"
              objectFit="contain"
            />
          </div>

          <div className="hover:tw-rounded-full hover:tw-bg-gray-300 hover:tw-cursor-pointer tw-w-8 h-8 tw-content-center tw-flex tw-justify-center">
            <Image
              src={githubIcon}
              width={20}
              height={20}
              alt="github icon"
              objectFit="contain"
            />
          </div>

          <div className="hover:tw-rounded-full hover:tw-bg-gray-300 hover:tw-cursor-pointer tw-w-8 tw-h-8 tw-content-center tw-flex tw-justify-center">
            <Image
              src={linkedinIcon}
              width={20}
              height={20}
              alt="Linkedin icon"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="hover:tw-cursor-pointer" onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
          <Image src={menuIcon} alt="menu icon" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}

export default Header;
