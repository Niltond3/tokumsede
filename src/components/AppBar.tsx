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
    <Container
      display="flex"
      position="absolute"
      placeContent="between"
      height="4rem"
      width="100vw"
      color="primary"
      p-inline-begin="xxl"
      p-inline-end="l"
    >
      <Typography variant="h1" bold={false}>
        TOKUMSEDE
      </Typography>
      <NavBar theme="horizontal"></NavBar>
      <Avatar subtitle="tks" src="" />
    </Container>
  );
}
