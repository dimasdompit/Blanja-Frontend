import React from 'react'
import './color.scss'

const Color = ({ color }) => {
    return (
        <div className='color__container' style={{ backgroundColor: color }}>
        </div>
    )
}

export default Color
