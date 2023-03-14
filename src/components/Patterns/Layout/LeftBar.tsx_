import { useReducer } from 'react';

import Img from 'components/Ui/DataDisplay/Image';
import MenuItem from 'components/Ui/Inputs/MenuItem';

type State = { toggleMenu: boolean };

type Action = { type: 'toggle' };

const reducer = (state: State, action: Action): State => {
  const actions = {
    toggle: () => {
      return { toggleMenu: !state.toggleMenu };
    }
  };
  const { type } = action;

  return Object.getOwnPropertyDescriptor(actions, type) ? actions[type]() : { ...state };
};
export default function LeftBar() {
  const [state, dispatch] = useReducer(reducer, { toggleMenu: false });

  const handleClick = () => dispatch({ type: 'toggle' });

  function setDark(val) {
    if (val === 'dark') {
      document.documentElement.classList.add('dark');
      moon.classList.add('hidden');
      sun.classList.remove('hidden');
    } else {
      document.documentElement.classList.remove('dark');
      sun.classList.add('hidden');
      moon.classList.remove('hidden');
    }
  }

  // function openNav() {
  //   if (sidebar.classList.contains('-translate-x-48')) {
  //     // max sidebar
  //     maxToolbar.classList.add('translate-x-0');
  //     logo.classList.remove('ml-12');
  //     content.classList.remove('ml-12');
  //     content.classList.add('ml-12', 'md:ml-60');
  //   } else {
  //     // mini sidebar
  //     sidebar.classList.add('-translate-x-48');
  //     sidebar.classList.remove('translate-x-none');
  //     maxSidebar.classList.add('hidden');
  //     maxSidebar.classList.remove('flex');
  //     miniSidebar.classList.add('flex');
  //     miniSidebar.classList.remove('hidden');
  //     maxToolbar.classList.add('translate-x-24', 'scale-x-0');
  //     maxToolbar.classList.remove('translate-x-0');
  //     logo.classList.add('ml-12');
  //     content.classList.remove('ml-12', 'md:ml-60');
  //     content.classList.add('ml-12');
  //   }
  // }

  const { toggleMenu } = state;
  return (
    <aside
      className={`container-bar container-bar-aside transition-slow color__transparent w-60 col-start-1 ${
        !toggleMenu ? '-translate-x-48' : ''
      }`}
    >
      {/* /#open sidebar button */}
      <div
        className={`
        absolute -right-6 top-2 flex w-full translate-x-24 scale-x-0 transform items-center justify-between rounded-full border-4 border-white bg-[#1E293B] transition  duration-300 ease-in dark:border-[#0F172A] h-12${
          !toggleMenu ? 'translate-x-24 scale-x-0' : 'translate-x-0'
        }
      `}
      >
        <div className="flex items-center space-x-2 pl-4 ">
          <div>
            <div
              onClick="setDark('dark')"
              className="moon text-white hover:text-blue-500 dark:hover:text-[#38BDF8]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </div>
            <div
              onClick="setDark('light')"
              className="sun hidden text-white hover:text-blue-500 dark:hover:text-[#38BDF8]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </div>
          </div>

          <div className="text-white hover:text-blue-500 dark:hover:text-[#38BDF8] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </div>
        </div>
        <div className="group flex items-center space-x-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 py-1  pl-10 pr-2 text-white dark:from-cyan-500 dark:to-blue-500  ">
          <div className="mr-12 transform duration-300 ease-in-out">NERVE</div>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="absolute -right-6 top-2 flex transform rounded-full border-4 border-white bg-[#1E293B] p-3 text-white transition duration-500 ease-in-out hover:bg-purple-500 dark:border-[#0F172A] dark:hover:bg-blue-500"
      >
        <Img size={16} image="logo"></Img>
      </button>
      <div className={`text-white mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]`}>
        {MenuItem('home', toggleMenu)}
        {MenuItem('app', toggleMenu)}
        {MenuItem('why', toggleMenu)}
        {MenuItem('who', toggleMenu)}
        {MenuItem('download', toggleMenu)}
        {MenuItem('chat', toggleMenu)}
      </div>
    </aside>
  );
}
