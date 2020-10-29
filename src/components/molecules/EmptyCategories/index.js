import React from 'react'
import { EmptyCategoriesBg } from '../../../assets'
import { Headline } from '../../atoms'
import './emptyCategories.scss'

const EmptyCategories = () => {
    return (
        <div className='empty__categories__wrapper'>
            <img className='empty__background' src={EmptyCategoriesBg} alt="empty-categories" />
            <Headline type='h3' title='Ooops... Product Not Found' />
        </div>
    )
}

export default EmptyCategories
