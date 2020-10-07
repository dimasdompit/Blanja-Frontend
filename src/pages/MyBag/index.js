import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { data, EmptyCartBg } from '../../assets';
import { Button, Checkbox, CircleButton, Gap, Headline, Subtext } from '../../components'
import { formatCurrency } from '../../utils';
import './myBag.scss'

class MyBag extends Component {
    constructor(props) {
        super();
        this.state = {
            products: data.products,
            cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
            itemSelected: [],
        }
    }

    /* ========= HANDLE PLUS QUANTITY BY PRODUCT ID ======== */
    handlePlus = (id) => {
        const cartItems = [...this.state.cartItems];
        const selectedProduct = cartItems.find(item => item.id === id);
        const index = cartItems.indexOf(selectedProduct);
        const product = cartItems[index];

        product.qty = product.qty + 1;
        product.total = product.qty * product.price;
        this.setState(() => {
            return { cartItems: [...cartItems] }
        })
    }

    /* ======== HANDLE MINUS QUANTITY BY PRODUCT ID ======== */
    handleMinus = (id) => {
        const cartItems = [...this.state.cartItems];
        const selectedProduct = cartItems.find(item => item.id === id);
        const index = cartItems.indexOf(selectedProduct);
        const product = cartItems[index];

        product.qty = product.qty - 1;
        product.total = product.qty * product.price;
        this.setState(() => {
            return { cartItems: [...cartItems] }
        })
    }

    /* ======== HANDLE CHECK ALL CHECKBOX ========= */
    handleAllCheck = (event) => {
        const cartItems = this.state.cartItems;
        const itemSelected = this.state.itemSelected;

        cartItems.forEach(item => item.isChecked = event.target.checked)

        let alreadySelect = false;
        itemSelected.forEach(value => {
            alreadySelect = true;
            if (event.target.checked === false) {
                itemSelected.splice(0, itemSelected.length)
            }
        })

        if (!alreadySelect && event.target.checked === true) {
            cartItems.forEach(item => {
                itemSelected.push({ id: item.id })
            })
        }

        this.setState({ cartItems: cartItems, itemSelected: itemSelected })
    }

    /* ======== HANDLE CHILD CHECKBOX ======= */
    handleCheckChildElement = (event) => {
        /* ======== Instance cart items ========  */
        const cartItems = this.state.cartItems;
        const product = cartItems.find(item => item.id === parseInt(event.target.id));

        /* ======== Instance item selected wrapper, when user click the checkbox, add 1 to this state ======== */
        const itemSelected = this.state.itemSelected;

        /* ====== Change isChecked value in Cart Items ======= */
        cartItems.forEach((item, index) => {
            if (item.id === parseInt(event.target.value)) {
                item.isChecked = event.target.checked
            }
        })

        /* ====== Check itemSelected. If it's alreadySelect, then delete the selected item ======= */
        let alreadySelect = false;
        itemSelected.forEach((value, index) => {
            if (value.id === product.id) {
                alreadySelect = true;
                if (event.target.checked === false) {
                    itemSelected.splice(index, 1)
                }
            }
        })

        /* ====== if item selected is empty, push 1 item ====== */
        if (!alreadySelect) {
            itemSelected.push({ id: product.id })
        }

        this.setState({ cartItems: cartItems, itemSelected: itemSelected })
    }

    /* ======== HANDLE REMOVE ITEM FROM CART ======== */
    removeFromCart = (cart) => {
        const itemSelected = this.state.itemSelected;

        cart.forEach((item, index) => {
            const searchProductToDelete = itemSelected.find(value => value.id === item.id);
            if (searchProductToDelete !== -1 && searchProductToDelete !== undefined) {
                cart.splice(index, itemSelected.length)
                // localStorage.setItem("cartItems", cart.splice(index, itemSelected.length))
                itemSelected.splice(index, itemSelected.length)
            }
        })
        this.setState({ cartItems: cart })
        localStorage.setItem("cartItems", JSON.stringify(cart))
    }


    render() {
        const { itemSelected, cartItems } = this.state
        return (
            <div className='mybag__container'>
                <Headline type='h1' title='My Bag' />
                <Gap height={30} />
                {cartItems.length === 0 ? (
                    <div className='empty__cart__wrapper'>
                        <Headline type='h2' title='Bag is empty, please back to product page to add.' style={{ color: '#db3022' }} />
                        <img src={EmptyCartBg} className='empty__cart__img' alt='empty-cart-background' />
                    </div>
                ) : (
                        <Row>
                            <Col md={8} className='left__items__container'>
                                <div className='bag__items'>
                                    <Checkbox value='checkedall' onClick={this.handleAllCheck} />
                                    <div className='selected__items'>Select all items <span>{` (${itemSelected.length} items selected)`}</span></div>
                                    <button className='button__delete__items' onClick={() => this.removeFromCart(this.state.cartItems)}>Delete</button>
                                </div>

                                {this.state.cartItems.map((item) => {
                                    return (
                                        <div key={item.id} className='item__details'>
                                            <Checkbox value={item.id} id={item.id} checked={item.isChecked} onChange={this.handleCheckChildElement} />
                                            <div className='product__items'>
                                                <img className='item__images' src={item.images[0]} alt={`${item.product_name}-img`} />
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
                                            <div className='item__qty'>
                                                <CircleButton variant='minus' disabled={item.qty === 1} onClick={() => this.handleMinus(item.id)} />
                                                <div className='details__qty'>{parseInt(item.qty)}</div>
                                                <CircleButton variant='plus' disabled={item.qty >= item.stock} onClick={() => this.handlePlus(item.id)} />
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
                                        <Subtext title='Total Price' size={16} />
                                        <Headline type='h3' title={formatCurrency(cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0))} />
                                    </div>
                                    <Gap height={30} />
                                    <Button variant='primary-round' title='Buy' onClick={() => this.props.history.push(`/checkout`)} />
                                </div>
                            </Col>
                        </Row>
                    )}

            </div>
        )
    }
}

export default MyBag
