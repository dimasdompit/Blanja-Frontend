import React from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../../atoms'
import './cartIcon.scss'

const CartIcon = ({ onClick, data, ...props }) => {
    return (
        <div className='cart__icon__container' onClick={onClick} {...props}>
            <Icon icon={faShoppingCart} />
            {data > 0 ? (
                <span className='cart__notif'>{data}</span>
            ) : (<></>)}
        </div>
    )
}

export default CartIcon
