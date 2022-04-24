import React from 'react';
import { useMemo } from 'react';
import Link from 'next/link'

const menuHeaderList = [
  {
    id: 0,
    name: 'Home',
    href: '#'
  },
  {
    id: 1,
    name: 'About',
    href: '#'
  },
  {
    id: 2,
    name: 'Dev',
    href: '#'
  },
  {
    id: 3,
    name: 'Book',
    href: '#'
  },
  {
    id: 4,
    name: 'Chore',
    href: '#'
  },
]

function Header() {
  const menuList = useMemo(() => {
    return menuHeaderList;
  }, [])

  const renderMenuList = menuList.map(item => {
    return (
      <div key={item.id} className="pl-4 pr-4 text-gray-900">
        <Link href={item.href}>
          <a>{item.name}</a>
        </Link>
      </div>
    )
  })

  return (
    <div className="h-16 w-full bg-gray-100 flex justify-center items-center">
      <div className='max-w-4xl my-0 mx-auto flex justify-center items-center'>
        <div className='font-[ms-madi] text-lg text-blue-500'>Limerence</div>
        <div className='flex justify-between items-center'>
          {renderMenuList}
        </div>
      </div>
    </div>
  );
}

export default Header;
