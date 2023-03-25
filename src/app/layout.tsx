import 'styles/globals.css';
import IndexLaytout from 'app/components/Patterns/Layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head />
      <body>
        <IndexLaytout>{children}</IndexLaytout>
      </body>
    </html>
  );
}
