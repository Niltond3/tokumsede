import Image from 'next/image';
import { ReactNode } from 'react';

import Typography from 'components/Ui/DataDisplay/Typography';

import logo from '../../../../public/images/logo.webp';
import Avatar from './Ui/DataDisplay/Avatar';
import Container from './Ui/Layout/Container';
import NavBar from './Ui/Navigation/NavBar';

interface IAppBar {
  children?: ReactNode;
}
export default function AppBar({ children }: IAppBar) {
  return (
    <Container theme="app-bar" color="primary-disable">
      <div className="flex">
        <Image
          alt="new-logo"
          src={'/images/logo/new-logo.svg'}
          width={48}
          height={48}
          className="opacity-50 transition duration-500 ease-in-out hover:opacity-100"
        ></Image>
        <Typography
          variant="h1"
          bold={false}
          className="flex-col items-start font-title text-base"
        >
          <span className="text-xs leading-3">Tô</span>
          <span className="text-xs leading-3">Kum</span>
          <span className="relative left-[-3px] mb-m text-xl leading-4">ede</span>
        </Typography>
      </div>
      <NavBar theme="top"></NavBar>
      <Avatar subtitle="tks" src="" />
    </Container>
  );
}
