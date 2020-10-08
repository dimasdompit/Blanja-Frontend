import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { data, EmptyCartBg } from '../../assets'
import { Button, Gap, Headline, Subtext } from '../../components'
import { formatCurrency } from '../../utils'
import './checkout.scss'

class Checkout extends Component {
    constructor(props) {
        super();
        this.state = {
            total: 0,
            address: data.address[0],
            items: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [],
            delivery: 5
        }
    }

    render() {
        const { delivery, address, items } = this.state
        return (
            <div className='checkout__container'>
                <Headline type='h1' title='Checkout' />
                <Gap height={30} />
                {items.length === 0 ? (
                    <div className='empty__cart__wrapper'>
                        <Headline type='h2' title='Bag is empty, please back to product page to add.' style={{ color: '#db3022' }} />
                        <img src={EmptyCartBg} className='empty__cart__img' alt='empty-cart-background' />
                    </div>
                ) : (
                        <Row>
                            <Col md={8} className='left__items__container'>
                                <Headline type='subheads' title='Shipping Address' />
                                <Gap height={14} />
                                <div className='address'>
                                    <Headline type='subheads' title={`${address.name} | ${address.type}`} />
                                    <Gap height={10} />
                                    <Subtext size={14} title={`${address.address}, ${address.city}, ${address.province}, ${address.zipcode} - ${address.country}`} />
                                    <Gap height={20} />
                                    <Button variant='outline-round' style={{ width: 210 }} title='Choose another address' onClick={() => alert('Modal Address')} />
                                </div>

                                {items.map((item) => {
                                    return (
                                        <div key={item.id} className='item__details'>
                                            <div className='product__items'>
                                                <img className='item__images' src={item.images[0]} alt={`${item.product_name}-img`} />
                                                <div className='item__description'>
                                                    {item.product_name.length > 25 ? (
                                                        <Headline type='subheads' title={`${item.product_name.substr(0, 70)}...`} />
                                                    ) : (
                                                            <Headline type='subheads' title={item.product_name} />
                                                        )}
                                                    <Gap height={4} />
                                                    <Subtext title={item.store} />
                                                </div>
                                            </div>
                                            <Headline type='subheads' title={formatCurrency(item.total)} />
                                        </div>
                                    )
                                })}
                            </Col>
                            <Col md={4}>
                                <div className='shopping__summary'>
                                    <Headline type='subheads' title='Shopping summary' />
                                    <Gap height={30} />
                                    <div className='total__price'>
                                        <Subtext title='Order' size={16} />
                                        <Headline type='h3' title={formatCurrency(items.reduce((acc, curr) => acc + curr.price * curr.qty, 0))} />
                                    </div>
                                    <div className='total__price'>
                                        <Subtext title='Delivery' size={16} />
                                        <Headline type='h3' title={formatCurrency(delivery)} />
                                    </div>

                                    <hr style={{ border: 'none', height: 2, color: '#9B9B9B', backgroundColor: '#9B9B9B' }} />

                                    <div className='total__price'>
                                        <Headline type='subheads' title='Shopping summary' />
                                        <Headline type='h3' style={{ color: '#db3022' }} title={formatCurrency(items.reduce((acc, curr) => acc + (curr.price * curr.qty), delivery))} />
                                    </div>
                                    <Gap height={30} />
                                    <Button variant='primary-round' title='Select payment' onClick={() => alert('OK')} />
                                </div>
                            </Col>
                        </Row>
                    )}
            </div>
        )
    }
}

export default Checkout
