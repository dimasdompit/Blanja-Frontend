import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../../atoms'
import './ratings.scss'

const Ratings = () => {
    return (
        <div className="rating__stars">
            <Icon icon={faStar} className='ic__stars' />
            <Icon icon={faStar} className='ic__stars' />
            <Icon icon={faStar} className='ic__stars' />
            <Icon icon={faStar} className='ic__stars' />
            <Icon icon={faStar} className='ic__stars' />
            <p className="rating">(10)</p>
        </div>
    )
}

export default Ratings
