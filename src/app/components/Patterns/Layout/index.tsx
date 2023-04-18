import AppBar from 'app/components/Patterns/Layout/AppBar';
import LeftBar from 'app/components/Patterns/Layout/LeftBar';
import RightBar from 'app/components/Patterns/Layout/RightBar';

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
