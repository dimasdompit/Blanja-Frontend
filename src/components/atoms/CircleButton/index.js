import React from 'react'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './circleButton.scss'

const CircleButton = ({ variant, title, disabled, ...props }) => {
    return (
        <>
            {variant === 'plus' ? (<button className='button__circle' disabled={disabled} {...props}> <FontAwesomeIcon className='button__icon' icon={faPlus} /></button>) : <div></div>}

            {variant === 'minus' ? (<button className='button__circle' disabled={disabled} {...props}> <FontAwesomeIcon icon={faMinus} /></button>) : <div></div>}
        </>
    )
}

export default CircleButton
