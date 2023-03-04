import Image from 'next/image';

import Typography from 'components/Ui/DataDisplay/Typography';

import logo from '../../public/images/logo.webp';
export default function Header() {
  return (
    <div className="header">
      <div className="logo ml-12 dark:text-white  transform ease-in-out duration-500 flex-none h-full flex items-center justify-center">
        TOKUMSEDE
      </div>
      <Typography variant="h1" color="shadow-sm drop-shadow-md">
        TOKUMSEDE
      </Typography>
      {/* /#SPACER */}
      <div className="grow h-full flex items-center justify-center"></div>
      <div className="flex-none h-full text-center flex items-center justify-center">
        <div className="flex space-x-3 items-center px-3">
          <div className="flex-none flex justify-center">
            <Image
              src={logo}
              alt="profile"
              className="shadow rounded-full object-cover"
              width={25}
              height={25}
            ></Image>
          </div>
        </div>
        <div className="hidden md:block text-sm md:text-md text-black dark:text-white">
          John Doe
        </div>
      </div>
    </div>
  );
}
