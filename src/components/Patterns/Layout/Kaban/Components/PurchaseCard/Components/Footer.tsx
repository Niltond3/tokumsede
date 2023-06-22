import Accordion, { AccordionItem } from 'components/Ui/DataDisplay/Accordion';
import * as icons from 'components/Ui/DataDisplay/Icons';
/* STATUS --> STATUS TIME AND RESPONSE TRACKER */
export default function Footer() {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-h-0 opacity-0 transition-faster group-hover:max-h-11 group-hover:opacity-100"
    >
      <AccordionItem
        value="Status"
        triggerChildren={
          <div className="flex">
            <icons.Pending />
            <icons.Accepted />
            <icons.logistics />
            <icons.Delivered />
            <icons.Cancel />
            <icons.Schedule />
          </div>
        }
        contentChildren={<div className="flex">Some thing here, in some time</div>}
      />
    </Accordion>
  );
}
