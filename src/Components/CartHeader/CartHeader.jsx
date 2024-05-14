import React from 'react'
import "./Cart.Header.scss"
const CartHeader = () => {
  return (
    <header className="cart-header">
    <div className="cart-header__title">Ապրանքի Անուն</div>
    <div className="cart-header__count">Ապրանքի Քանակ</div>
    <div className="cart-header__cost">Ապրանքի Գին</div>
</header>
  )
}

export default CartHeader