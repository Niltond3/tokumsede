import React, { useContext } from 'react'

import Icons from 'components/Ui/DataDisplay/Icons'
import Tooltip from 'components/Ui/DataDisplay/Tooltip'
import Button from 'components/Ui/Inputs/Button'
import TextField from 'components/Ui/Inputs/TextField'
import Dropdown from 'components/Ui/Navigation/Dropdown'

import SessionWrapper from '../../SessionWrapper'

import * as types from 'common/types'
import { ToClipboard, numberToCurrency } from 'common/utils'
import { AppContext } from 'hooks/usePurchase'
import $ from 'jquery'

export default function Currency({ dropDownId, purchase }: types.KabanCardCurrencyProps) {
  const paymentForms: types.IconsKey[] = ['Cash', 'CreditCard', 'Pix', 'IFood']
  const purchaseId = purchase.id
  const { dispatch } = useContext(AppContext)
  const { update } = types.PURCHASE_ACTION_TYPES

  const handleClickChangePayment = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const { currentTarget } = event
    const { value, dataset } = currentTarget
    $(`#${dataset.check}`).prop('checked', false)
    const newPaymentType = value as types.PaymentType
    dispatch({
      type: update,
      payload: { id: purchaseId, updateFields: { payment: newPaymentType } },
    })
  }

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
    <SessionWrapper>
      <div className="flex justify-between gap-2">
        {/* UPDATE THIS BLOCK */}
        <div className="relative [&_*]:data-[radix-popper-content-wrapper]:!absolute">
          <Dropdown
            triggerIcon={payment as types.IconsKey}
            portal={false}
            contentStyles="absolute p-1 text-sm gap-0.5 text-lg-primary-darker flex flex-col items-center rounded-md pt-1 backdrop-blur-sm transition-faster border-lg-primary-base/30 bg-lg-primary-lighter/20"
          >
            {paymentForms.map((value, index) => {
              const key = `${purchaseId}-${value}-${index}`
              return (
                <Dropdown.Item
                  className="opacity-50 transition-faster hover:opacity-100"
                  key={key}
                  data-value={value}
                  onSelect={handleItemSelect}
                >
                  <Icons icon={value} />
                </Dropdown.Item>
              )
            })}
          </Dropdown>
        </div>
        <Tooltip side="top" content={`Forma de pagamento: ${payment}`}>
          <div className="group relative flex flex-1 items-center">
            <input type="checkbox" id={dropDownId} className="group peer hidden"></input>
            <label htmlFor={dropDownId} className="flex cursor-pointer items-center">
              <Icons icon={payment as types.IconsKey} />
              <Icons icon="Arrow" />
            </label>
            <ul className="absolute top-full z-10 flex max-h-0 w-full flex-col items-center overflow-hidden rounded-md border-[0.1rem] border-lg-primary-base/0 bg-lg-primary-lighter/0 pt-1 backdrop-blur-sm transition-faster peer-checked:max-h-[10rem] peer-checked:border-lg-primary-base/30 peer-checked:bg-lg-primary-lighter/20">
              {paymentForms.map((value, index) => {
                const key = `${purchaseId}-${value}-${index}`
                return (
                  <RenderPaymentLi
                    handleClick={handleClickChangePayment}
                    key={key}
                    value={value}
                    dropDownId={dropDownId}
                  />
                )
              })}
            </ul>
          </div>
        </Tooltip>
        {/* UPDATE THIS BLOCK */}
        <Tooltip
          content={
            <label className="flex items-center gap-2">
              <Icons icon="Copy" /> <span>Total a pagar</span>
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
              <Icons icon="Exchange" />
            </label>
            <TextField type="currence" />
          </div>
        </Tooltip>
      </div>
    </SessionWrapper>
  )
}

const RenderPaymentLi = ({
  dropDownId,
  handleClick,
  key,
  value,
}: types.KabanCardCurrencyPaymentLiProps) => {
  return (
    <li className="opacity-50 transition-faster hover:opacity-100" key={key}>
      <button onClick={handleClick} value={value} data-check={dropDownId}>
        <Icons icon={value} />
      </button>
    </li>
  )
}
