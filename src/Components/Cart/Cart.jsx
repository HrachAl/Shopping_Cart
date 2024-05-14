import React, { createContext } from 'react'
import { useState, useEffect } from 'react'
import CartHeader from '../CartHeader/CartHeader'
import Product from '../Product/Product'
import CartFooter from '../CartFooter/CartFooter'
import data from "./../../data"
import Result from '../Result/Result'
const Cart = ({handleClick,buy}) => {
    const [cart, setCart] = useState(data)
    const [total,setTotal] = useState({
        count: cart.reduce((prev,acc)=>{return prev + acc.count},0),
        price : cart.reduce((prev,acc)=>{return prev + acc.priceTotal},0)
    })
    
    useEffect(()=>{
        setTotal({
            count: cart.reduce((prev,acc)=>{return prev + acc.count},0),
            price : cart.reduce((prev,acc)=>{return prev + acc.priceTotal},0)   
        })
    },[cart])

    
    
    
    function prodDelete(id) {
        setCart((cart) => cart.filter((product) => product.id != id)
    )
    }
    
    const countPlus = (id) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: ++product.count,
                        priceTotal: product.count * product.price,
                    }
                }
                return product
            })
        })
    }

    
    function countMinus(id) {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: product.count > 1 ? --product.count : 1,
                        priceTotal: product.count * product.price,
                    }
                }
                else return product
            })
        })
    }
    
    const changeValue = (id, value) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: value <=0 ? 1 : value,
                        priceTotal: value==0 ? product.price : value * product.price
                    }
                }
                return product
            })
        })
    }

    const products = cart.map((product) => {

        
        return <>
        <Product countMinus={countMinus}
            countPlus={countPlus}
            prodDelete={prodDelete} 
            key={product.id}
            changeValue={changeValue}
            product={product} />
            </>

    })
    return (
        <>
           

            
            {buy && cart.length  ? <section className="cart">
            <CartHeader />

            {products}
            

            <CartFooter total={total} />
        </section>: <button onClick={()=> {
            setCart(data)
            
        }} className='Go-Back'>Հետ բերել ապրանքները</button>}

        {
            cart.length ? <Result/> &&
            <button className='BuyButton' onClick={handleClick}>Գնիր ապրանքները</button> : ""
        }
        
        
        
        </>
        
    )
}

export default Cart