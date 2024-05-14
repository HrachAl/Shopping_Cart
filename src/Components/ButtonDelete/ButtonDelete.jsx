import React from 'react'

const ButtonDelete = ({prodDelete,id}) => {
    return (
        <button type="button" onClick={()=> {prodDelete(id)}}>
            <img src="./img/icons/cross.svg" alt="Delete" />
        </button>
    )
}

export default ButtonDelete