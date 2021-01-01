import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { EmptyCartBg } from '../../assets';
import { Button, Checkbox, CircleButton, Gap, Headline, Subtext } from '../../components'
import { formatCurrency } from '../../utils';
import './myBag.scss'

// Redux
import { connect } from 'react-redux'
import { addQuantity, subtractQuantity, handleAllCheck, handleCheckChildElements, removeFromCart } from '../../config/Redux/actions/cart'

class MyBag extends Component {

    /* ======== HANDLE BUY CHECKOUT ======== */
    buyCheckout = () => {
        this.props.history.push('/checkout')
    }

    render() {
        return (
            <div className='mybag__container'>
                <Container>
                    <Headline type='h1' title='My Bag' />
                    <Gap height={30} />
                    {this.props.cart.cartItems.length === 0 ? (
                        <div className='empty__cart__wrapper'>

                            {/* ========================== EMPTY CART COMPONENT ========================== */}
                            <Headline type='h2' title='Bag is empty, please back to product page to add.' style={{ color: '#db3022' }} />
                            <img src={EmptyCartBg} className='empty__cart__img' alt='empty-cart-background' />

                        </div>
                    ) : (
                            <Row>

                                {/* ========================== LEFT ELEMENTS SECTION ========================== */}
                                <Col md={8} className='left__items__container'>

                                    {/* ========================== CHECKBOX ALL ITEMS SECTION ========================== */}
                                    <div className='bag__items'>
                                        <Checkbox value='checkedall' onClick={(event) => this.props.handleAllCheck(event)} />
                                        <div className='selected__items'>Select all items <span>{` (${this.props.cart.itemSelected.length} items selected)`}</span></div>
                                        <button className='button__delete__items' onClick={this.props.removeFromCart}>Delete</button>
                                    </div>

                                    {/* ========================== CHECKBOX PER-ITEM SECTION ========================== */}
                                    {this.props.cart !== undefined && this.props.cart.cartItems.map((item) => {
                                        return (
                                            <div key={item.id} className='item__details'>
                                                <Checkbox
                                                    value={item.id}
                                                    id={item.id}
                                                    checked={item.isChecked}
                                                    onChange={(event) => this.props.handleCheckChildElements(event)}
                                                />

                                                {/* ========================== ITEM DETAIL PRODUCTS ========================== */}
                                                <div className='product__items'>
                                                    <img className='item__images' src={`${process.env.REACT_APP_API_URL}/images/products/${item.images[0]}`} alt={`${item.product_name}-img`} />
                                                    <div className='item__description'>
                                                        {item.product_name.length > 25 ? (
                                                            <Headline type='subheads' title={`${item.product_name.substr(0, 25)}...`} />
                                                        ) : (
                                                                <Headline type='subheads' title={item.product_name} />
                                                            )}
                                                        <Gap height={4} />
                                                        <Subtext title={item.store} />
                                                    </div>
                                                </div>

                                                {/* ========================== ITEM QUANTITY PRODUCTS ========================== */}
                                                <div className='item__qty'>
                                                    <CircleButton variant='minus' disabled={item.qty === 1} onClick={() => this.props.subtractQuantity(item.id)} />
                                                    <div className='details__qty'>{parseInt(item.qty)}</div>
                                                    <CircleButton variant='plus' disabled={item.qty >= item.stock} onClick={() => this.props.addQuantity(item.id)} />
                                                </div>
                                                <Headline type='subheads' title={formatCurrency(item.total)} />
                                            </div>
                                        )
                                    })}
                                </Col>

                                {/* ========================== RIGHT ELEMENT SECTION ========================== */}
                                <Col md={4}>

                                    {/* ========================== SHOPPING SUMMARY SECTION ========================== */}
                                    <div className='shopping__summary'>
                                        <Headline type='subheads' title='Shopping summary' />
                                        <Gap height={30} />

                                        {/* ========================== TOTAL PRICE ========================== */}
                                        <div className='total__price'>
                                            <Subtext title='Total Price' size={16} />
                                            <Headline type='h3' title={this.props.cart !== undefined ? formatCurrency(this.props.cart.total) : null} />
                                        </div>
                                        <Gap height={30} />
                                        <Button variant='primary-round' title='Buy' onClick={this.buyCheckout} />
                                    </div>
                                </Col>
                            </Row>
                        )}
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    products: state.products,
    cart: state.cart
})

const mapDispatchToProps = { addQuantity, subtractQuantity, removeFromCart, handleAllCheck, handleCheckChildElements }

export default connect(mapStateToProps, mapDispatchToProps)(MyBag)
