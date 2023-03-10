import { ReactNode } from 'react';

import logo from '../../../../public/images/logo.webp';
import Avatar from './Ui/DataDisplay/Avatar';
import InteractiveLogo from './Ui/Inputs/InteractiveLogo';
import Container from './Ui/Layout/Container';
import NavBar from './Ui/Navigation/NavBar';

interface IAppBar {
  children?: ReactNode;
}
export default function AppBar({ children }: IAppBar) {
  return (
    <Container theme="app-bar" color="primary-disable">
      <InteractiveLogo />
      <NavBar theme="top"></NavBar>
      <Avatar subtitle="tks" src="" />
    </Container>
  );
}
