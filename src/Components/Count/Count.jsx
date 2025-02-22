import React from 'react'
import "./Count.style.scss"

const Count = ({count,countMinus, changeValue, countPlus,id}) => {
    return (
        <div className="count">
            <div className="count__box">
                <input onChange={(e)=> changeValue(id, +e.target.value)} type="number" className="count__input" min="1" max="100" value={count} />
            </div>
            <div className="count__controls">
                <button  type="button" className="count__up" onClick={()=>{countPlus(id)}}>
                    <img src="./img/icons/icon-up.svg" alt="Increase" />
                </button>
                <button  type="button" className="count__down" onClick={()=> {countMinus(id)}}>
                    <img src="./img/icons/icon-down.svg" alt="Decrease" />
                </button>
            </div>
        </div>
    )
}

export default Count