import Image, { StaticImageData } from 'next/image';

import Typography from './Typography';

import PropTypes from 'prop-types';

interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

interface IAvatarProps {
  subtitle?: string;
  src?: string | StaticImport;
}
function Avatar({ subtitle, src }: IAvatarProps) {
  return (
    <div className="flex h-full flex-none items-center justify-center text-center">
      <Image
        src={src}
        alt="profile"
        className="flex flex-none items-center rounded-full mx-s object-cover shadow"
        width={25}
        height={25}
      ></Image>
      <Typography variant="subtitle">{subtitle}</Typography>
      {/* <div className="md:text-md hidden text-sm text-black dark:text-white md:block">
      </div> */}
    </div>
  );
}

Avatar.propTypes = {};

export default Avatar;
