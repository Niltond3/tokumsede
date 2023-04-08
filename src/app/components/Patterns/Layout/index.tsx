import AppBar from 'app/components/Patterns/Layout/AppBar';
import LeftBar from 'app/components/Patterns/Layout/LeftBar';
import RightBar from 'app/components/Patterns/Layout/RightBar';
import {AppProvider} from './Kaban/context'


export default function IndexLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
    <main className="">
      {/* HEADER */}
      <AppBar />
      {/* SIDE BAR LEFT */}
      <LeftBar />
      {/* SIDE BAR RIGHT */}
      <RightBar />
      {/* CONTENT */}
      <div className="mr-xxxl h-screen pt-xxl pl-m pr-s pb-m transition-fast md:px-l ">
        {children}
      </div>
    </main>
    </AppProvider>

  );
}
