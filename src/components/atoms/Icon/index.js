import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './icon.scss'

const Icon = ({ icon, ...props }) => {
    return (
        <div className='icon__container' {...props}>
            <FontAwesomeIcon icon={icon} />
        </div>
    )
}

export default Icon
