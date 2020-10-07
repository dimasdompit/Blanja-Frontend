import React from 'react'
import './button.scss'

const Buttons = ({ variant, title, disabled, padding, ...props }) => {
    return (
        <>
            {variant === 'primary' ? <button className='btn__primary' disabled={disabled} style={{ paddingTop: padding, paddingBottom: padding }} {...props}>{title}</button>
                : variant === 'outline' ? <button className='btn__outline' disabled={disabled} style={{ paddingTop: padding, paddingBottom: padding }} {...props}>{title}</button>
                    : variant === 'primary-round' ? <button className='btn__primary-round' disabled={disabled} style={{ paddingTop: padding, paddingBottom: padding }} {...props}>{title}</button>
                        : variant === 'outline-round' ? <button className='btn__outline-round' disabled={disabled} style={{ paddingTop: padding, paddingBottom: padding }} {...props}>{title}</button>
                            : <div></div>
            }
        </>
    )
}

export default Buttons
