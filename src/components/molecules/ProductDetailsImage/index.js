import React from 'react'
import './productDetailsImage.scss'

const ProductDetailsImage = ({ img }) => {
    return (
        <div className='image__container'>
            <img className='image__content' src={img} alt={`${img}-image`} />
        </div>
    )
}

export default ProductDetailsImage
