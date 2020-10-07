import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './cart.scss'

const Cart = ({ ...props }) => {
    return (
        <div className='cart__container' {...props} onClick={() => alert('Cart Icon')}>
            <FontAwesomeIcon icon={faShoppingCart} />
        </div>
    )
}

export default Cart
