import React from 'react'
import './productDetailsImage.scss'

const ProductDetailsImage = (props) => {
    return (
        <div className='image__container'>
            {props.image !== undefined
                ? (
                    <img className='image__content' src={props.image} alt={`${props.image}-image`} />
                ) : (
                    <div></div>
                )}
        </div>
    )
}

export default ProductDetailsImage
