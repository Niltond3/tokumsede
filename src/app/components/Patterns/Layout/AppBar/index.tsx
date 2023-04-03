import Avatar from 'app/components/Ui/DataDisplay/Avatar';
import Container from 'app/components/Ui/Layout/Container';

import Breadcrumb from './Breadcrumb';

export default function AppBar() {
  return (
    <Container type="AppBar" className="bg-lg-primary transition-slow dark:bg-dk-primary">
      <div></div>
      {/* <NavBar theme="Breadcrumbs" entrys={entrys} /> */}
      <Breadcrumb />
      <Avatar subtitle="tks" src="" />
    </Container>
  );
}
