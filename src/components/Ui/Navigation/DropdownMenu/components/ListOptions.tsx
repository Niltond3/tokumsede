import * as Dropdown from '@radix-ui/react-dropdown-menu';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { Slot } from '@radix-ui/react-slot';
import * as types from 'common/types';
import { motion } from 'framer-motion';

export default function ListOptions<T>({
  list,
  renderOptions,
  closeMenu,
  onSelect,
  controls,
  setSelect,
  className
}: types.DropdownListOptionsProps<T>) {
  return (
    <Dropdown.Content asChild align="center" collisionPadding={5}>
      <ScrollAreaPrimitive.Root asChild>
        <ScrollAreaPrimitive.Viewport asChild>
          <motion.div
            className={className}
            initial="close"
            animate={controls}
            exit="close"
            variants={{
              open: { opacity: 1, scale: '100%' },
              close: { opacity: 0, scale: '90%' }
            }}
          >
            {list.map((item) => (
              <RenderOption
                setSelect={setSelect}
                key={`${item.id}${item.name}`}
                renderOptions={renderOptions}
                option={item}
                closeMenu={closeMenu}
                onSelect={onSelect}
                controls={controls}
              />
            ))}
          </motion.div>
        </ScrollAreaPrimitive.Viewport>
      </ScrollAreaPrimitive.Root>
    </Dropdown.Content>
  );
}

const RenderOption = <T,>({
  setSelect,
  option,
  renderOptions,
  closeMenu,
  controls,
  onSelect = () => {
    // empty
  }
}: types.DropdownOptionProps<T>) => (
  <Slot
    onSelect={async (e) => {
      e.preventDefault();
      /**
       *
       */
      onSelect();
    }}
    className="select-none outline-none transition-faster"
  >
    {renderOptions({
      ...option,
      closeMenu: closeMenu,
      setSelect: setSelect,
      controls
    })}
  </Slot>
);
