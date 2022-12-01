'use client';

import { useState } from 'react';
import {
  Logo,
  HomeIcon,
  ActiveHomeIcon,
  SearchIcon,
  ActiveSearchIcon,
  LibraryIcon,
  ActiveLibraryIcon,
  PlaylistIcon,
  LikeIcon,
  InstallIcon,
} from './Icons';

export default function Sidebar() {
  let [active, setActive] = useState('home');

  return (
    <nav
      className="fixed top-0 left-0 flex w-[218px] flex-col bg-black pt-6 text-[#b3b3b3]"
      style={{
        height: 'calc(100vh - 90px)',
      }}
    >
      <div className="flex h-full flex-col text-sm font-bold">
        <a href="/" className="mb-[18px] px-6">
          <Logo />
        </a>
        <ul>
          <li className="px-2">
            <a
              draggable="false"
              href="/"
              aria-current="page"
              className="flex h-10 cursor-pointer items-center gap-4 rounded px-4"
            >
              {active === 'home' ? <ActiveHomeIcon /> : <HomeIcon />}
              {active === 'home' ? (
                <span className="text-white">Home</span>
              ) : (
                <span className="hover:text-white">Home</span>
              )}
            </a>
          </li>
          <li className="px-2">
            <a
              draggable="false"
              href="/search"
              className="flex h-10 cursor-pointer items-center gap-4 rounded px-4"
            >
              {active === 'search' ? <ActiveSearchIcon /> : <SearchIcon />}

              {active === 'search' ? (
                <span className="text-white">Search</span>
              ) : (
                <span className="hover:text-white">Search</span>
              )}
            </a>
          </li>
          <li className="px-2">
            <a
              draggable="false"
              href="/collection"
              className="flex h-10 cursor-pointer items-center gap-4 rounded px-4"
            >
              {active === 'library' ? <ActiveLibraryIcon /> : <LibraryIcon />}
              {active === 'library' ? (
                <span className="text-white">Your Library</span>
              ) : (
                <span className="hover:text-white">Your Library</span>
              )}
            </a>
          </li>
        </ul>

        <div className="mt-6 h-full">
          <div className="px-2">
            <button className="flex h-10 cursor-pointer items-center gap-4 rounded px-4 opacity-70 hover:text-white hover:opacity-100">
              <PlaylistIcon />
              <span>Create Playlist</span>
            </button>

            <button className="flex h-10 cursor-pointer items-center gap-4 rounded px-4 opacity-70 hover:text-white hover:opacity-100">
              <LikeIcon />
              <span>Liked Songs</span>
            </button>
          </div>
          <div className="mt-4  ">
            <hr className="mx-4 h-[1px] border-none bg-[#282828]" />
          </div>
        </div>

        <div>
          <div className="px-2">
            <a
              draggable="false"
              href="/download"
              className="flex h-10 cursor-pointer items-center gap-4 rounded px-4 hover:text-white hover:opacity-100"
            >
              <InstallIcon />
              <span>Install App</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
