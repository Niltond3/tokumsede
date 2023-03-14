import { ReactNode } from 'react';

import Avatar from 'components/Ui/DataDisplay/Avatar';
import InteractiveLogo from 'components/Ui/Inputs/InteractiveLogo';
import NavBar, { entry } from 'components/Ui/Navigation/NavBar';

interface IAppBar {
  children?: ReactNode;
}
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
export default function AppBar({ children }: IAppBar) {
  return (
    <div className="container-bar container-bar_app color__secondary">
      <div></div>
      <NavBar theme="Breadcrumbs" entrys={entrys}></NavBar>
      <Avatar subtitle="tks" src="" />
    </div>
  );
}
