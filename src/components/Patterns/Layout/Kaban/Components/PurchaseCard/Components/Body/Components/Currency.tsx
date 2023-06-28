import React, { useContext } from 'react'

import * as icons from 'components/Ui/DataDisplay/Icons'
import Icons from 'components/Ui/DataDisplay/Icons'
import Tooltip from 'components/Ui/DataDisplay/Tooltip'
import Button from 'components/Ui/Inputs/Button'
import TextField from 'components/Ui/Inputs/TextField'
import Dropdown from 'components/Ui/Navigation/Dropdown'

import SessionWrapper from '../../SessionWrapper'

import * as types from 'common/types'
import { ToClipboard, numberToCurrency } from 'common/utils'
import { AppContext } from 'hooks/usePurchase'

export default function Currency({ purchase }: types.KabanCardCurrencyProps) {
  const paymentForms: types.IconsKey[] = ['Cash', 'CreditCard', 'Pix', 'IFood']
  const purchaseId = purchase.id
  const { dispatch } = useContext(AppContext)
  const { update } = types.PURCHASE_ACTION_TYPES

  const handleItemSelect = (event: Event) => {
    const target = event.target as HTMLButtonElement
    const newPaymentType = target.dataset.value as types.PaymentType
    dispatch({
      type: update,
      payload: { id: purchaseId, updateFields: { payment: newPaymentType } },
    })
  }

  const {
    payment,
    price,
    // exchange
  } = purchase
  const currencyPrice = numberToCurrency(price)
  // const currencyExchange = numberToCurrency(exchange)

  return (
    <SessionWrapper className="flex justify-between gap-2">
      <Dropdown
        buttonIcon={payment as types.IconsKey}
        contentStyles="p-1 text-sm gap-0.5 text-lg-primary-darker flex flex-col items-center rounded-md pt-1 backdrop-blur-sm transition-faster border-lg-primary-base/30 bg-lg-primary-lighter/20"
        openIndicator
      >
        {paymentForms.map((value, index) => (
          <RenderPaymentForm
            value={value}
            onSelect={handleItemSelect}
            key={`${purchaseId}-${value}-${index}`}
          />
        ))}
      </Dropdown>
      {/* UPDATE THIS BLOCK */}
      <Tooltip
        content={
          <label className="flex items-center gap-2">
            <icons.Copy /> <span>Total a pagar</span>
          </label>
        }
        side="top"
      >
        <Button
          onClick={ToClipboard}
          data-clipboard="Total a pagar: R$ 00,00"
          iconL="CurrencyReal"
        >
          {currencyPrice}
        </Button>
      </Tooltip>
      <Tooltip side="top" content="Troco">
        <div className="group relative flex flex-2 items-center gap-2">
          <label>
            <icons.Exchange />
          </label>
          <TextField type="currence" />
        </div>
      </Tooltip>
    </SessionWrapper>
  )
}
type RenderPaymentFormProps = {
  value: types.IconsKey
  onSelect: (event: Event) => void
}
const RenderPaymentForm = ({ value, onSelect }: RenderPaymentFormProps) => {
  return (
    <Dropdown.Item
      className="opacity-50 transition-faster hover:opacity-100"
      data-value={value}
      onSelect={onSelect}
    >
      <Icons icon={value} />
    </Dropdown.Item>
  )
}
