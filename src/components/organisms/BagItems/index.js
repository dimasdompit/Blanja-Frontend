import React from 'react'
import { Headline, Subtext } from '../../atoms'

const BagItems = ({ img, title, store, ...props }) => {
    return (
        <div className='product__items' {...props}>
            <img src={img} alt={`${title}-img`} {...props} />
            <Headline type='subheads' title={title} {...props} />
            <Subtext title={store} {...props} />
        </div>
    )
}

export default BagItems
