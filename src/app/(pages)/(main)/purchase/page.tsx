import Kaban from 'components/Patterns/Layout/Kaban';

export default function Page() {
  return (
    <div className="relative flex w-screen overflow-y-hidden overflow-x-scroll scroll-smooth rounded-md bg-white/40 p-m scrollbar scrollbar-thumb-slate-300 scrollbar-h-1 center-y">
      <Kaban />
    </div>
  );
}
