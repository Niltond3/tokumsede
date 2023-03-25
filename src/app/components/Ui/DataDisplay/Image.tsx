import Image from 'next/image';

import paths from '../../../../utils/ImagesPaths';

interface IImg {
  size?: number;
  image: keyof typeof paths;
  className?: string;
}

export default function Img({ image, size, className }: IImg) {
  const src = paths[image];
  return (
    <Image
      src={src}
      alt="Any Text"
      width={size}
      height={size}
      placeholder="blur"
      className={className}
    />
  );
}
