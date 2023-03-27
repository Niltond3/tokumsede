import Image from 'next/image';

import paths from '../../../../utils/ImagesPaths';

interface IImg {
  size?: number;
  image: keyof typeof paths;
  className?: string;
  blur?: 'blur' | 'empty';
}

export default function Img({ image, size, className, blur }: IImg) {
  const src = paths[image];
  return (
    <Image
      priority
      src={src}
      alt={image}
      width={size}
      height={size}
      placeholder={blur}
      className={className}
    />
  );
}
