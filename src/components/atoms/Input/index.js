import React from 'react'
import './input.scss'

const Input = ({ type, placeholder, ...props }) => {
    return (
        <div className="field">
            <label>
                <input className='input' placeholder='  ' type={type} {...props} />
                <p>{placeholder}</p>
            </label>
        </div>
    )
}

export default Input
