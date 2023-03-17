import AppBar from 'components/Patterns/Layout/AppBar';
import LeftBar from 'components/Patterns/Layout/LeftBar';
import RightBar from 'components/Patterns/Layout/RightBar';

import Head from 'utils/Head';

export default function Home() {
  return (
    <>
      <Head />
      <main className="">
        {/* HEADER */}
        <AppBar />
        {/* SIDE BAR LEFT */}
        <LeftBar />
        {/* SIDE BAR RIGHT */}
        <RightBar />
        {/* CONTENT */}
        <div className="transition-fast mr-xxxl h-screen pt-xxl pl-m pr-s pb-m md:px-l ">
          CONTENT
        </div>
        {/* <div className="content transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4 h-screen ml-xl mr-xxxl">
          <div className="my-5 -mx-2 flex flex-wrap">
            <div className="w-full p-2 lg:w-1/3">
              <div className="flex w-full flex-row items-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 dark:from-cyan-500 dark:to-blue-500">
                <div className="flex h-8 w-8 flex-none items-center rounded-md bg-white p-2 text-indigo-500 dark:bg-[#0F172A] dark:text-white md:h-12 md:w-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="object-scale-down transition duration-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </div>
                <div className="ml-5 flex flex-grow flex-col justify-around text-white">
                  <div className="whitespace-nowrap text-xs">Total User</div>
                  <div className="">100</div>
                </div>
                <div className=" flex flex-none items-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className='"w-full p-2 md:w-1/2 lg:w-1/3 '>
              <div className="flex w-full flex-row items-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 dark:from-cyan-500 dark:to-blue-500">
                <div className="flex h-8 w-8 flex-none items-center rounded-md bg-white p-2 text-indigo-500 dark:bg-[#0F172A] dark:text-white md:h-12 md:w-12 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="object-scale-down transition duration-500 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                </div>
                <div className="ml-5 flex flex-grow flex-col justify-around text-white">
                  <div className="whitespace-nowrap text-xs">Total Product</div>
                  <div className="">500</div>
                </div>
                <div className=" flex flex-none items-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-1/3">
              <div className="flex w-full flex-row items-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 dark:from-cyan-500 dark:to-blue-500">
                <div className="flex h-8 w-8 flex-none items-center rounded-md bg-white p-2 text-indigo-500 dark:bg-[#0F172A] dark:text-white md:h-12 md:w-12 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="object-scale-down transition duration-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                    />
                  </svg>
                </div>
                <div className="ml-5 flex flex-grow flex-col justify-around text-white">
                  <div className="whitespace-nowrap text-xs">Total Visitor</div>
                  <div className="">500</div>
                </div>
                <div className=" flex flex-none items-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mb-4 rounded-lg bg-blue-100 p-4 text-sm text-blue-700 dark:bg-blue-200 dark:text-blue-800"
            role="alert"
          >
            <span className="font-medium">Info alert!</span> Change a few things up and
            try submitting again.
          </div>
          <div
            className="mb-4 rounded-lg bg-red-100 p-4 text-sm text-red-700 dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <span className="font-medium">Danger alert!</span> Change a few things up and
            try submitting again.
          </div>
          <div
            className="mb-4 rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
            role="alert"
          >
            <span className="font-medium">Success alert!</span> Change a few things up and
            try submitting again.
          </div>
        </div> */}
      </main>
    </>
  );
}
