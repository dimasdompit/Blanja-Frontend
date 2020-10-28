import React from 'react'
import './input.scss'

const Input = ({ type, name, placeholder, ...props }) => {
    return (
        <div className="field">
            <label for={name}>
                <input className='input' placeholder='  ' name={name} type={type} {...props} />
                <p>{placeholder}</p>
            </label>
        </div>
    )
}

export default Input
