import Accordion, { AccordionItem } from 'components/Ui/DataDisplay/Accordion'
import * as icons from 'components/Ui/DataDisplay/Icons'

import { motion } from 'framer-motion'
/* STATUS --> STATUS TIME AND RESPONSE TRACKER */
const base = 4
const t = (d: number) => d * base
export default function Footer() {
  return (
    <Accordion type="single" collapsible asChild>
      <div className="group/hover relative">
        <span className="absolute -top-2 select-none text-xl opacity-0 center-y group-hover/hover:animate-none group-hover:animate-pulse">
          <icons.Drag2 />
        </span>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileHover={{
            height: 'auto',
            opacity: 1,
            transition: { duration: 0.5, opacity: { delay: t(0.025) } },
          }}
          transition={{
            duration: t(0.15),
            opacity: { duration: t(0.03) },
          }}
          exit={{ height: 0, opacity: 0 }}
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
        </motion.div>
      </div>
    </Accordion>
  )
}
