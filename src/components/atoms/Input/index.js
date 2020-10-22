import React from 'react'
import './input.scss'

const Input = ({ type, ...props }) => {
    return (
        <div className='input__wrapper'>
            <input className='input' type={type} {...props} />
        </div>
    )
}

export default Input
