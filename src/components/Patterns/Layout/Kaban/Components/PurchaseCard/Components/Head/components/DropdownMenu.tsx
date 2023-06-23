import React from 'react';

import * as icons from 'components/Ui/DataDisplay/Icons';
import Dropdown from 'components/Ui/Navigation/Dropdown';

import * as types from 'common/types';

export default function DropdownMenu() {
  console.log(Object.keys(types.StatusColumns));
  console.log(types.StatusColumns);
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
      <Item>
        Salvar Pedido <Shortcuts press="S" />
      </Item>
      <Item>
        Apagar Pedido <Shortcuts press="A" />
      </Item>
      <SubMenu triggerLabel={'Outras ações'}>
        <Item>
          Editar Pedido <Shortcuts press="E" />
        </Item>
        <Item>
          Resetar Pedido <Shortcuts press="R" />
        </Item>
      </SubMenu>
      <Dropdown.Separator />
      <SubMenu triggerLabel={'Copiar'}>
        <Item>Custo</Item>
        <Item>
          Custos detalhados <Shortcuts press="D" />
        </Item>
        <Item>
          Informações do cliente <Shortcuts press="C" />
        </Item>
        <Item>
          Pedido <Shortcuts press="P" />
        </Item>
      </SubMenu>
      <SubMenu triggerLabel={'Imprimir Roteiro'}>
        <Item>
          Completo <Shortcuts press="C" shift />
        </Item>
        <Item>
          Parcial <Shortcuts press="P" shift />
        </Item>
      </SubMenu>
      <Dropdown.Separator />
      <Dropdown.Label className="flex select-none pl-5">Status</Dropdown.Label>
      <Dropdown.RadioGroup>
        {Object.keys(types.StatusColumns).map((val, index) => (
          <RadioItem key={`radio-item-${val}-${index}`} value={val}>
            {val}
          </RadioItem>
        ))}
      </Dropdown.RadioGroup>
    </Dropdown>
  );
}

const itemStyles =
  'flex w-48 select-none items-center justify-between rounded py-1 pl-5 pr-1 transition-faster hover:bg-lg-primary hover:text-lg-primary-base';

const Item = ({ children, className }: types.FragmentProps) => (
  <Dropdown.Item className={itemStyles}>
    <>{children}</>
  </Dropdown.Item>
);

const RadioItem = ({ children, value }: types.FragmentProps & { value: string }) => (
  <Dropdown.RadioItem value={value} className={itemStyles}>
    <>{children}</>
  </Dropdown.RadioItem>
);

type ShortcutsProps = {
  press: string;
  shift?: boolean;
  command?: boolean;
  ctrl?: boolean;
};

const Shortcuts = ({ press, command = true, ctrl, shift }: ShortcutsProps) => (
  <div className="flex items-center opacity-70">
    {command && <icons.Command />}
    {shift && '+'}
    {shift && <icons.Shift />}+{press}
  </div>
);

type DropdownSubmenuPurchaseCardProps = types.FragmentProps & {
  triggerLabel: React.ReactNode;
};

const SubMenu = ({ children, triggerLabel }: DropdownSubmenuPurchaseCardProps) => (
  <Dropdown.Sub
    triggerLabel={triggerLabel}
    triggerIcon="Arrow"
    sideOffset={0}
    alignOffset={-5}
    triggerStyles="text-lg-primary p-1 text-xs font-medium flex items-center justify-between rounded py-1 pl-5 pr-1 transition-faster hover:bg-lg-primary hover:text-lg-primary-base"
    contentStyles="bg-lg-primary-base text-lg-primary p-1 rounded-md text-xs gap-0.5 elevation-8 flex flex-col font-medium"
  >
    <>{children}</>
  </Dropdown.Sub>
);