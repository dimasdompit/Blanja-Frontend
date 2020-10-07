import React from 'react'
import './checkbox.scss'

const Checkbox = ({ value, checked, disabled, label, ...props }) => {
    return (
        <>
            <label className='checkbox__container'>
                <input type="checkbox" value={value} checked={checked} disabled={disabled} {...props} />
                <span className='checkmark'></span>
            </label>
        </>
    )
}

export default Checkbox
