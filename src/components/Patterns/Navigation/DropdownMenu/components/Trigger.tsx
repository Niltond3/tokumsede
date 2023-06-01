import Icons from 'components/Ui/DataDisplay/Icons';
import Button from 'components/Ui/Inputs/Button';
import Divider from 'components/Ui/Layout/Divider';

import * as Dropdown from '@radix-ui/react-dropdown-menu';
import * as types from 'common/types';

export default function Trigger<T>({
  arrow,
  separator,
  renderSelect,
  item,
  className
}: types.DropdownTriggerProps<T>) {
  const selected = (object: types.DropdownDefaultProps<T>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { closeMenu: _, setSelect: __, ...selected } = object;
    return selected;
  };
  const { wrapper, button, icon } = className;

  const renderSelectItem = () => {
    if (Array.isArray(item)) return item.map((item) => renderSelect(selected(item)));
    return renderSelect(selected(item));
  };

  return (
    <div className={`flex ${wrapper}`}>
      <div className="flex h-2/3">
        <Dropdown.Trigger asChild>
          <Button aria-label="Customise options" className={button}>
            <Icons icon="Purchase" className={`pointer-events-none ${icon}`} />
          </Button>
        </Dropdown.Trigger>
        {arrow && <Icons icon="Arrow" />}
        {separator && <Divider orientation="vertical" className="flex" />}
      </div>
      {renderSelectItem()}
    </div>
  );
}
