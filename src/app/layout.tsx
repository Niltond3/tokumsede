import 'styles/globals.css';
import { Metadata } from 'next';

import IndexLaytout from 'app/components/Patterns/Layout';

export const metadata: Metadata = {
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png'
  },
  title: 'TôKumSede - delivery.',
  description: `O TôKumSede é uma rede inovadora de distribuição de água com
  entrega porta a porta. Através de nossa central telefônica, site ou aplicativo, você poderá
  escolher solicitar a entrega das águas Alcalinas da fonte Terra Santa. Na sua casa ou na sua empresa,
  seu pedido será entregue em instantes ou em data e horário agendados por você.`
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <IndexLaytout>{children}</IndexLaytout>
      </body>
    </html>
  );
}
