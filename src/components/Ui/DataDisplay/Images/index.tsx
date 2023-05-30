import Image from 'next/image';

import paths from './ImagesPaths';

import * as types from 'common/types';

export default function Img({
  image,
  size,
  className,
  blur,
  width,
  height,
  fill,
  sizes
}: types.ImageProps) {
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
      blurDataURL={`${src}`}
      className={className}
    />
  );
}
