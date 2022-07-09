import { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import closeIcon from '@/assets/images/icons/close.png';
import { SidebarProps } from './types';

function Sidebar(props: SidebarProps) {
  const { isOpenSidebar, setIsOpenSidebar } = props;

  const router = useRouter();

  const menuHeaderList = [
    {
      id: 0,
      name: 'Home',
      href: '/',
    },
    {
      id: 1,
      name: 'Confide',
      href: '/confide',
    },
    {
      id: 2,
      name: 'About',
      href: '/about',
    },
    {
      id: 3,
      name: 'Dev',
      href: '/dev',
    },
    {
      id: 4,
      name: 'Book',
      href: '/book',
    },
    {
      id: 5,
      name: 'Chore',
      href: '/chore',
    },
  ];

  const menuList = useMemo(() => {
    return menuHeaderList;
  }, []);

  const renderMenuList = menuList.map((item) => {
    return (
      <div
        key={item.id}
        className="tw-pl-1 tw-pr-1 tw-h-8 tw-flex tw-items-center hover:tw-bg-gray-100 hover:tw-cursor-pointer tw-w-full tw-text-sm md:tw-text-base md:tw-pl-4 md:tw-pr-4 tw-text-gray-900"
        onClick={() => router.push(`${item.href}`)}
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

  return (
    <div className="tw-transition-all tw-shadow-xl tw-fixed tw-bg-gray-50 tw-w-80 tw-h-screen justify-between items-center tw-z-50 tw-top-0 tw-right-0 tw-border-l">
      <div
        className="tw-h-16 tw-flex tw-justify-end tw-p-8 tw-items-center hover:tw-cursor-pointer"
        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
      >
        <Image src={closeIcon} alt="icon..." width={20} height={20} />
      </div>
      {renderMenuList}
    </div>
  );
}

export default Sidebar;
