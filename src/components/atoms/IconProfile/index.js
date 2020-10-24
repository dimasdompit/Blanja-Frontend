import React from 'react'
import './iconProfile.scss'

const IconProfile = ({ profilePict, ...props }) => {
    return (
        <div className='icon__profile__wrapper' {...props}>
            <img src={profilePict} alt={profilePict} />
        </div>
    )
}

export default IconProfile
