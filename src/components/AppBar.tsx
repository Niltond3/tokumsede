import { ReactNode } from 'react';

import Typography from 'components/Ui/DataDisplay/Typography';

import logo from '../../../../public/images/logo.webp';
import Avatar from './Ui/DataDisplay/Avatar';
import Container from './Ui/Layout/Container';

interface props {
  children?: ReactNode;
}
export default function AppBar() {
  return (
    <Container
      display="flex"
      position="fixed"
      height="4rem"
      width="100vw"
      color="primary"
      p-inline-begin="xxl"
      p-inline-end="l"
    >
      <Typography variant="h1" bold={false}>
        TOKUMSEDE
      </Typography>
      {/* /#SPACER */}
      <div className="flex h-full grow items-center justify-center"></div>
      <Avatar subtitle="tks" src="" />
      {/* <div className="flex h-full flex-none items-center justify-center text-center">
        <div className="flex items-center space-x-3 px-3">
          <div className="flex flex-none justify-center">
            <Image
              src={logo}
              alt="profile"
              className="rounded-full object-cover shadow"
              width={25}
              height={25}
            ></Image>
          </div>
        </div>
        <div className="md:text-md hidden text-sm text-black dark:text-white md:block">
          John Doe
        </div>
      </div> */}
    </Container>
  );
}
