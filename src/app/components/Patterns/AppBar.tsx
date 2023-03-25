import Avatar from 'app/components/Ui/DataDisplay/Avatar';
import NavBar, { entry } from 'app/components/Ui/Navigation/NavBar';

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
    <header className="container-bar container-bar_app color__secondary transition-slow">
      <div></div>
      <NavBar theme="Breadcrumbs" entrys={entrys}></NavBar>
      <Avatar subtitle="tks" src="" />
    </header>
  );
}
