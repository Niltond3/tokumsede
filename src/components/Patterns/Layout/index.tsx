import 'styles/globals.css';
import AppBar from 'components/Patterns/Layout/AppBar';
import LeftBar from 'components/Patterns/Layout/LeftBar';
import RightBar from 'components/Patterns/Layout/RightBar';

export default function IndexLayout({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
