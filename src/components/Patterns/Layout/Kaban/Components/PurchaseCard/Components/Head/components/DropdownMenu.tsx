import React from 'react';

import Dropdown, {
  DropdownArrow,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownSub
} from 'components/Ui/Navigation/DropdownMenu';

export default function DropdownMenu() {
  return (
    <Dropdown
      triggerIcon="Menu"
      triggerClassName="!opacity-0 transition-faster group-hover:!opacity-100"
      side="right"
      arrown
      sideOffset={10}
    >
      <DropdownItem>Salvar</DropdownItem>
      <DropdownItem>Editar</DropdownItem>
      <DropdownItem>Cancelar</DropdownItem>
      <DropdownItem>Apagar Campos</DropdownItem>
      <DropdownSub triggerLabel={'Status'} triggerIcon="Arrow" sideOffset={3}>
        <DropdownItem>Agendado</DropdownItem>
        <DropdownItem>Pendente</DropdownItem>
        <DropdownItem>Aceito</DropdownItem>
        <DropdownItem>Despachado</DropdownItem>
        <DropdownItem>Entregue</DropdownItem>
        <DropdownItem>Cancelado</DropdownItem>
      </DropdownSub>
    </Dropdown>
  );
}
