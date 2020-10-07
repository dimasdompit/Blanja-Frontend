import React from 'react'
import './subtext.scss'

const Subtext = ({ title, size, color, ...props }) => {
    return (
        <p className='subtext' {...props} style={{ fontSize: size, color: color }}>{title}</p>
    )
}

export default Subtext
