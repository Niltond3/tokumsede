import Image from 'next/image';

import paths from '../../../../utils/ImagesPaths';

export type ImagePath = keyof typeof paths;

interface IImg {
  size?: number;
  sizes?: number;
  width?: number;
  height?: number;
  image: ImagePath;
  className?: string;
  fill?: boolean;
  blur?: 'blur' | 'empty';
}

export default function Img({
  image,
  size,
  className,
  blur,
  width,
  height,
  fill,
  sizes
}: IImg) {
  const src = paths[image];
  return (
    <Image
      priority
      fill={fill}
      src={src}
      alt={image}
      width={width || size}
      height={height || size}
      sizes={sizes ? `${sizes}vw` : undefined}
      placeholder={blur}
      className={className}
    />
  );
}
