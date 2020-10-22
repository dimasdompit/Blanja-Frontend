import React from 'react'
import './radioButton.scss'

const RadioButton = ({ value, checked, disabled, label, ...props }) => {
    return (
        <label className='radio__button__container'>
            <input type="radio" name='radio' value={value} checked={checked} disabled={disabled} {...props} />
            <span className='checkmark__radio'></span>
        </label>
    )
}

export default RadioButton
