import AppBar from 'app/components/Patterns/Layout/AppBar';
import LeftBar from 'app/components/Patterns/Layout/LeftBar';
import RightBar from 'app/components/Patterns/Layout/RightBar';

import { AppProvider } from 'hooks/usePurchase';

export default function IndexLayout({ children }: { children: React.ReactNode }) {
  const ret = (
    <div className="flex h-screen flex-col">
      <div className="h-8 w-screen bg-black">AppBar</div>
      <div className="flex flex-1">
        <aside className="relative bg-red-500/50">
          <p className="relative -top-8 h-8 bg-red-500/50">aside</p>
        </aside>
        <main className="relative flex-1 bg-slate-400">
          <AppProvider>{children}</AppProvider>
          <aside>navbar</aside>
        </main>
      </div>
    </div>
  );

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

  const retDefault = (
    <main className="">
      {/* HEADER */}
      <AppBar />
      {/* SIDE BAR LEFT */}
      <LeftBar />
      {/* SIDE BAR RIGHT */}
      <RightBar />
      {/* CONTENT */}
      <div className="mr-xxxl h-screen pt-xxl pl-m pr-s pb-m transition-fast md:px-l ">
        <AppProvider>{children}</AppProvider>
      </div>
    </main>
  );

  return retVar;
}
