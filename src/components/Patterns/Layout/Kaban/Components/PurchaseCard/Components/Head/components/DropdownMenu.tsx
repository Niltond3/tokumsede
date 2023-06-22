import React from 'react';

import Dropdown, {
  DropdownArrow,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownSub
} from 'components/Ui/Navigation/DropdownMenu';

import * as types from 'common/types';

export default function DropdownMenu() {
  return (
    <Dropdown
      triggerIcon="Menu"
      triggerStyles="!opacity-0 transition-faster group-hover:!opacity-100"
      side="right"
      arrown
      sideOffset={10}
      contentStyles="bg-lg-primary-base text-lg-primary p-1 rounded-md text-xs gap-0.5 elevation-8 flex flex-col font-medium"
      arrownStyles="fill-lg-primary-base"
    >
      <Item>Salvar Pedido</Item>
      <Item>Apagar Pedido</Item>
      <SubMenu triggerLabel={'Outras ações'}>
        <Item>Editar Pedido</Item>
        <Item>Resetar Pedido</Item>
      </SubMenu>
      <DropdownSeparator />
      <SubMenu triggerLabel={'Status'}>
        <Item>Agendado</Item>
        <Item>Pendente</Item>
        <Item>Aceito</Item>
        <Item>Despachado</Item>
        <Item>Entregue</Item>
        <Item>Cancelado</Item>
      </SubMenu>
      <SubMenu triggerLabel={'Copiar'}>
        <Item>Custo</Item>
        <Item>Custos detalhados</Item>
        <Item>Informações do Cliente</Item>
        <Item>Pedido</Item>
      </SubMenu>
      <SubMenu triggerLabel={'Imprimir Roteiro'}>
        <Item>Completo</Item>
        <Item>Parcial</Item>
      </SubMenu>
    </Dropdown>
  );
}

const Item = ({ children, className }: types.FragmentProps) => (
  <DropdownItem className="w-full select-none rounded py-1 pl-5 pr-1 transition-faster hover:bg-lg-primary hover:text-lg-primary-base">
    <>{children}</>
  </DropdownItem>
);

type DropdownSubmenuPurchaseCardProps = types.FragmentProps & {
  triggerLabel: React.ReactNode;
};

const SubMenu = ({ children, triggerLabel }: DropdownSubmenuPurchaseCardProps) => (
  <DropdownSub
    triggerLabel={triggerLabel}
    triggerIcon="Arrow"
    sideOffset={3}
    alignOffset={-7}
    triggerStyles="text-lg-primary p-1 text-xs font-medium flex items-center justify-between rounded py-1 pl-5 pr-1 transition-faster hover:bg-lg-primary hover:text-lg-primary-base"
    contentStyles="bg-lg-primary-base text-lg-primary p-1 rounded-md text-xs gap-0.5 elevation-8 flex flex-col font-medium"
  >
    <>{children}</>
  </DropdownSub>
);
