import Image from 'next/image';
import React from 'react';

import Typography from 'components/Ui/DataDisplay/Typography';

import Container from '../Layout/Container';

export default function InteractiveLogo() {
  return (
    <Container theme="wrapper" color="transparent" className="wrapper_logo">
      <Image
        alt="new-logo"
        src={'/images/logo/new-logo.svg'}
        width={48}
        height={48}
        className="opacity-50 transition duration-500 ease-in-out group-hover:opacity-100"
      ></Image>
      <Typography
        variant="h1"
        bold={false}
        className="flex-col items-start font-title text-base eve"
      >
        <span className="relative select-none left-[-10px] text-xs leading-3">Tô</span>
        <span className="relative select-none left-[-10px] text-xs leading-3">Kum</span>
        <span className="relative select-none left-[-10px] 50 mb-m text-xl text-white transition duration-500 ease-in-out leading-4 opacity-50 group-hover:opacity-100">
          ede
        </span>
      </Typography>
    </Container>
  );
}
