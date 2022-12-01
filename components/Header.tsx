'use client';
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  ProfileIcon,
} from './Icons';

import { useState } from 'react';

export default function Header() {
  const [backgrounColor, setBackgrounColor] = useState('transparent');

  window.addEventListener('scroll', () => {
    setBackgrounColor(`rgba(30, 8, 23,${window.scrollY / 100})`);
  });

  return (
    <header
      className="op fixed top-0 right-0 z-40 flex h-16  w-full justify-between  py-4 px-8 "
      style={{
        width: 'calc(100% - 218px)',
        backgroundColor: backgrounColor,
      }}
    >
      <div className="flex gap-4">
        <button className="flex h-8  w-8 cursor-pointer items-center justify-center rounded-full bg-[#000000b3] opacity-60">
          <ChevronRightIcon />
        </button>
        <button className="flex h-8  w-8 cursor-pointer items-center justify-center rounded-full bg-[#000000b3] opacity-60">
          <ChevronLeftIcon />
        </button>
      </div>

      <div className="flex gap-6">
        <button className="flex min-h-[32px] items-center justify-center rounded-full border border-[#727272] bg-transparent px-[15px] font-bold">
          Upgrade
        </button>
        <button className="flex h-8 items-center gap-2 rounded-full bg-[#000000b3] p-[2px]">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#535353]">
            <ProfileIcon />
          </div>
          <span className="font-bold">Adib Fahimi</span>
          <div className="mr-1">
            <ChevronDownIcon />
          </div>
        </button>
      </div>
    </header>
  );
}
