import React from 'react'
import './imageUpload.scss'

const ImageUpload = ({ productImg, disabled, path, src, ...props }) => {
    return (
        <div className='imageUpload__wrapper'>
            {/* <img className='imageUpload__image' src={src} /> */}
            <div className="upload-btn-wrapper">
                <button className='btn' disabled={disabled}>Choose Image</button>
                <input type="file" disabled={disabled} {...props} />
            </div>
            <p>*Maximum 4 Image/Photo</p>
        </div>
    )
}

export default ImageUpload
