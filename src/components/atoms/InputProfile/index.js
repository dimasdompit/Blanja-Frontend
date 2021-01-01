import React from 'react'
import './inputProfile.scss'

const InputProfile = ({ label, type, ...props }) => {
    return (
        <div className="input__profile__wrapper">
            <label>{label}</label>
            <input type={type} {...props} />
        </div>
    )
}

export default InputProfile
