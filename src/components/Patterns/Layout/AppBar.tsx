import Avatar from 'components/Ui/DataDisplay/Avatar';
import NavBar, { entry } from 'components/Ui/Navigation/NavBar';

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
  return (
    <div className="container-bar container-bar_app color__secondary transition-slow">
      <div></div>
      <NavBar theme="Breadcrumbs" entrys={entrys}></NavBar>
      <Avatar subtitle="tks" src="" />
    </div>
  );
}
