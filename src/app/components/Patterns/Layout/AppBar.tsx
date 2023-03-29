import Avatar from 'app/components/Ui/DataDisplay/Avatar';
import Container from 'app/components/Ui/Layout/Container';
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
    <Container type="AppBar" className="color__secondary transition-slow">
      <div></div>
      <NavBar theme="Breadcrumbs" entrys={entrys}></NavBar>
      <Avatar subtitle="tks" src="" />
    </Container>
  );
}
