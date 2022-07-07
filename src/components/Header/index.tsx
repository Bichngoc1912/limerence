import React from 'react';
import { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import facebookIcon from '@/assets/images/icons/facebook.png';
import githubIcon from '@/assets/images/icons/github.png';
import linkedinIcon from '@/assets/images/icons/linkedin.png';
import menuIcon from '@/assets/images/icons/menu.png';
import Image from 'next/image';

const menuHeaderList = [
  {
    id: 0,
    name: 'Home',
    href: '/',
  },
  {
    id: 1,
    name: 'About',
    href: '/about',
  },
  {
    id: 2,
    name: 'Dev',
    href: '/dev',
  },
  {
    id: 3,
    name: 'Book',
    href: '/book',
  },
  {
    id: 4,
    name: 'Chore',
    href: '/chore',
  },
];

function Header() {
  const router = useRouter();

  const menuList = useMemo(() => {
    return menuHeaderList;
  }, []);
  
  const renderMenuList = menuList.map((item) => {
    return (
      <div
        key={item.id}
        className="pl-1 pr-1 text-sm md:text-base md:pl-4 md:pr-4 text-gray-900"
      >
        <Link href={item.href}>
          <a
            style={{
              color: router.pathname === item.href ? '#3B82F6' : 'inherit',
            }}
          >
            {item.name}
          </a>
        </Link>
      </div>
    );
  });

  const handleClickLogo = () => {
    return router.push('/');
  };

  return (
    <div className="h-16 border-b border-gray-300 z-20 w-full bg-gray-50 flex justify-center items-center sticky top-0">
      <div className="max-w-4xl pl-2 pr-2 w-full my-0 mx-auto flex justify-between items-center">
        <div
          className="font-[ms-madi] text-lg  text-blue-500 hover:cursor-pointer"
          onClick={handleClickLogo}
        >
          ._Limerence_.
        </div>
        <div className='grid grid-cols-3 gap-2'>
          <div className='hover:rounded-full hover:bg-gray-300 hover:cursor-pointer w-8 h-8 content-center flex justify-center'>
            <Image
              src={facebookIcon}
              width={20}
              height={20}
              alt='facebook icon'
              objectFit='contain'
            />
          </div>

          <div className='hover:rounded-full hover:bg-gray-300 hover:cursor-pointer w-8 h-8 content-center flex justify-center'>
            <Image
              src={githubIcon}
              width={20}
              height={20}
              alt='github icon'
              objectFit='contain'
            />
          </div>

          <div className='hover:rounded-full hover:bg-gray-300 hover:cursor-pointer w-8 h-8 content-center flex justify-center'>
            <Image
              src={linkedinIcon}
              width={20}
              height={20}
              alt='Linkedin icon'
              objectFit='contain'
            />
          </div>
        </div>

        <div className='hover:cursor-pointer'>
          <Image
            src={menuIcon}
            alt='menu icon'
            width={20}
            height={20}
          />
        </div>
        {/* <div className="flex justify-between items-center">{renderMenuList}</div> */}
      </div>
    </div>
  );
}

export default Header;
