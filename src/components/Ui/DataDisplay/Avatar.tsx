import Image from 'next/image';

import * as types from 'common/types';

export default function Avatar({ subtitle, src }: types.AvatarProps) {
  return (
    <div className="flex h-full flex-none items-center justify-center text-center">
      <Image
        src={src}
        alt="profile"
        className="mx-s flex flex-none items-center rounded-full object-cover shadow"
        width={25}
        height={25}
      />
      <p>{subtitle}</p>
      {/* <div className="md:text-md hidden text-sm text-black dark:text-white md:block">
      </div> */}
    </div>
  );
}
