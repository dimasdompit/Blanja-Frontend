import React from 'react'
import { Card } from 'react-bootstrap'
import './cards.scss'
import Ratings from '../Ratings'
import { formatCurrency } from '../../../utils'

const Cards = ({ id, image, title, price, store, ...props }) => {

    return (
        // <Link to={`/product-details/${id}`} style={{ textDecoration: 'none' }}>
        <Card className='card__container' style={{ borderRadius: '8px' }} {...props}>
            <Card.Img variant="top" className='card__img' src={image} />
            <Card.Body>
                {title.length > 35
                    ? <h3 className='card__title'>{`${title.substr(0, 35)}...`}</h3>
                    : <h3 className='card__title'>{title}</h3>
                }
                <h4 className='card__price'>{formatCurrency(price)}</h4>
                <p className='card__store'>{store}</p>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: '#fff', border: 'none' }}>
                <Ratings />
            </Card.Footer>
        </Card>
        // </Link>
    )
}

export default Cards
