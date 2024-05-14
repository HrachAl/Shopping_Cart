import React from 'react'
import "./Product.style.scss"
import Count from '../Count/Count'
import ButtonDelete from '../ButtonDelete/ButtonDelete'
const Product = ({product, prodDelete, countPlus, countMinus,changeValue}) => {
    const PriceFormatter = new Intl.NumberFormat()
  return (
    <section className="product">
                <div className="product__img"><img src={`./img/products/${product.img}`} alt="Apple MacBook Air 13" /></div>
                <div className="product__title">{product.title}</div>
                <div className="product__count">
                    <Count changeValue={changeValue} countMinus={countMinus} id={product.id} count={product.count} countPlus={countPlus}/>
                </div>
                <div className="product__price">{PriceFormatter.format(product.priceTotal)} Դրամ</div>
                <div className="product__controls">
                    <ButtonDelete id={product.id} prodDelete={prodDelete}/>
                </div>
            </section>
  )
}

export default Product