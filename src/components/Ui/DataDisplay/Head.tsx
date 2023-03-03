import NextHead from 'next/head';
import { ReactNode } from 'react';

import PropTypes from 'prop-types';

interface Props {
  Children?: ReactNode;
}
export default function Head({ Children }: Props) {
  return (
    <NextHead>
      <title>
        TôKumSede - O melhor e mais confiável delivery de água do Nordeste.
      </title>
      <meta
        name="description"
        content="O TôKumSede é uma rede inovadora de distribuição de água com
        entrega porta a porta. Através de nossa central telefônica, site ou aplicativo, você poderá
        escolher solicitar a entrega das águas Alcalinas da fonte Terra Santa. Na sua casa ou na sua empresa,
        seu pedido será entregue em instantes ou em data e horário agendados por você."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/images/favicon.ico" />
      {Children}
    </NextHead>
  );
}

Head.propTypes = {
  Children: PropTypes.node
};