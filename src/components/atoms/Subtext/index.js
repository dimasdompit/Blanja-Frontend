import React from 'react'
import './subtext.scss'

const Subtext = ({ title, size, textAlign, color, ...props }) => {
    return (
        <p className='subtext' {...props} style={{ fontSize: size, color: color, textAlign: textAlign }}>{title}</p>
    )
}

export default Subtext
