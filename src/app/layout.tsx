import 'styles/globals.css';
import { Metadata } from 'next';

import { TooltipProvider } from './components/Ui/DataDisplay/_Tooltip';
import IndexLaytout from 'app/components/Patterns/Layout';

export const metadata: Metadata = {
  icons: {
    icon: '../../public/images/new-logo/logo-full.svg',
    shortcut: '../../public/images/new-logo/logo-full.svg'
  },
  title: 'TôKumSede - delivery',
  description: `O TôKumSede é uma rede inovadora de distribuição de água com
  entrega porta a porta. Através de nossa central telefônica, site ou aplicativo, você poderá
  escolher solicitar a entrega das águas Alcalinas da fonte Terra Santa. Na sua casa ou na sua empresa,
  seu pedido será entregue em instantes ou em data e horário agendados por você.`
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          <IndexLaytout>{children}</IndexLaytout>
        </TooltipProvider>
      </body>
    </html>
  );
}
