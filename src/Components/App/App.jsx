import React from "react"
import { useState } from "react"
import "./App.style.scss"
import Title from "../Title/Title"
import Cart from "../Cart/Cart"
import Result from "../Result/Result"
function App() {
    const [buy,setBuy] = useState(true)
    const [show,setShow] = useState(true)
    function handleClick () {
        
        setBuy(false)
    }

    
  return (
    <>
        {
            buy ? <section className="section-cart">
            <header className="section-cart__header">
                <div className="container">
                    <Title/>
                </div>
            </header>
            <div className="section-cart__body">
                <div className="container">
    
                    <Cart  buy={buy} handleClick={handleClick}/>
                </div>
            </div>
            
        </section> : <Result/>
        }
    
    </>
  )
}

export default App
