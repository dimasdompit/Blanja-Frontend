import React from 'react'
import './profilePicture.scss'

const ProfilePicture = ({ profilePicture, path, src, ...props }) => {
    return (
        <div className='profilePict__wrapper'>
            <img className='profilePict__image' src={src} alt={`${profilePicture}`} />
            <div className="upload-btn-wrapper">
                <button className='btn'>Select Image</button>
                <input type="file" {...props} />
            </div>
        </div>
    )
}

export default ProfilePicture
