'use client';

import { usePathname, useSelectedLayoutSegments } from 'next/navigation';

import Avatar from 'app/components/Ui/DataDisplay/Avatar';
import Container from 'app/components/Ui/Layout/Container';
import NavBar, { entry } from 'app/components/Ui/Navigation/NavBar';

import { NAVIGATION_LINKS } from 'utils/Constants';

const entrys: entry[] = [
  {
    href: '#',
    title: 'Home',
    level: 'primary'
  },
  {
    href: '#',
    title: 'Dashboard',
    level: 'secondary'
  }
];

export default function AppBar() {
  const pathName = usePathname();
  console.log(useSelectedLayoutSegments());

  return (
    <Container type="AppBar" className="bg-lg-primary transition-slow dark:bg-dk-primary">
      <div>{pathName}</div>
      <NavBar theme="Breadcrumbs" entrys={entrys} />
      <Avatar subtitle="tks" src="" />
    </Container>
  );
}
