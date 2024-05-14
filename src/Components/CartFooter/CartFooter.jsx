import React from 'react'
import "./Cart.Footer.scss"
const CartFooter = ({total}) => {
  const PriceFormatter = new Intl.NumberFormat()
  return (
    <footer className="cart-footer">
    <div className="cart-footer__count">{total.count} Ընդհանուր քանակ</div>
    <div className="cart-footer__price">{PriceFormatter.format(total.price)} Դրամ</div>
</footer>
  )
}

export default CartFooter