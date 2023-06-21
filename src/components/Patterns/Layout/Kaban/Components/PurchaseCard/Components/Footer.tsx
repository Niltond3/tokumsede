import Accordion, { AccordionItem } from 'components/Ui/DataDisplay/Accordion';
import * as icons from 'components/Ui/DataDisplay/Icons';
/* STATUS --> STATUS TIME AND RESPONSE TRACKER */
export default function Footer() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        value="Status"
        triggerChildren={<>clickHere</>}
        contentChildren={
          <div className="flex">
            <icons.Pending />
            <icons.Accepted />
            <icons.logistics />
            <icons.Delivered />
            <icons.Cancel />
            <icons.Schedule />
          </div>
        }
      />
    </Accordion>
  );
}
