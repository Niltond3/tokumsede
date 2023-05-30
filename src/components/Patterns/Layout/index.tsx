import AppBar from 'components/Patterns/Layout/AppBar';
import LeftBar from 'components/Patterns/Layout/LeftBar';
import RightBar from 'components/Patterns/Layout/RightBar';

import { AppProvider } from 'hooks/usePurchase';

export default function IndexLayout({ children }: { children: React.ReactNode }) {
  const retVar = (
    <div className="flex h-screen flex-col">
      <AppBar />
      <div className="flex flex-1">
        <LeftBar />
        <main className="flex-1">
          <AppProvider>{children}</AppProvider>
          <RightBar />
        </main>
      </div>
    </div>
  );

  return retVar;
}
