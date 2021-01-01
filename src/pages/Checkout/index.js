import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import swal from 'sweetalert'
import { EmptyCartBg } from '../../assets'
import { Button, ChooseAddress, Gap, Headline, Subtext } from '../../components'
import { formatCurrency } from '../../utils'
import './checkout.scss'
import Payment from '../../components/organisms/Payment'

// Redux
import { connect } from 'react-redux'
import { deleteFromCart } from '../../config/Redux/actions/cart'
import { getMyAddress, getDetailMyAddress } from '../../config/Redux/actions/profile'
import { insertMyTransactions, getMyTransactions } from '../../config/Redux/actions/transactions'

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addressId: null,
            modalAddress: false,
            modalPayment: false,
            delivery: 5,
            total: 0,
            address: [],
            myAddress: [],
        }
    }

    getMyAddressFromAPI = async () => {
        const token = this.props.auth.data.token;

        try {
            const response = await this.props.getMyAddress(token)
            this.setState({ myAddress: response.value.data.data })
        } catch (error) {
            console.log(error)
        }
    }

    handleCallbackId = (id) => {
        this.setState({ addressId: id },
            () => this.getAddressDetailsFromAPI()
        )
    }

    getAddressDetailsFromAPI = async () => {
        const token = this.props.auth.data.token;
        const id = this.state.addressId

        try {
            const response = await this.props.getDetailMyAddress(token, id)
            this.setState({ address: response.value.data.data })
        } catch (error) {
            console.log(error)
        }
    }

    handleOrder = async () => {
        const token = this.props.auth.data.token;
        const cartItems = this.props.cart.cartItems;
        const items = cartItems.map(val => {
            return {
                product_id: val.id,
                qty: val.qty
            }
        })

        const data = {
            total: this.props.cart.total + this.state.delivery,
            address: this.state.addressId,
            items: items
        }

        try {
            const response = await this.props.insertMyTransactions(token, data)
            await this.props.getMyTransactions(token)
            console.log(response)
            swal({
                icon: "success",
                title: 'Order Success. Thank you!',
                showConfirmaButton: false,
                timer: 3000,
            });
            await this.props.deleteFromCart()
            setTimeout(() => {
                this.props.history.push('/')
            }, 3000);
        } catch (error) {
            console.log(error)
            const errorMsg = error.response.data.message;
            swal({
                icon: 'error',
                title: `${errorMsg}`,
                button: true,
                dangerMode: true
            })
        }
    }

    componentDidMount() {
        this.getMyAddressFromAPI()
        if (this.state.addressId !== null) {
            this.getAddressDetailsFromAPI()
        }
    }

    render() {
        const { delivery } = this.state
        const { addressDetails } = this.props.profile
        const { cart } = this.props
        return (
            <div className='checkout__container'>
                <Container>
                    <Headline type='h1' title='Checkout' />
                    <Gap height={30} />
                    {cart !== undefined && cart.cartItems.length === 0 ? (
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
                                        {this.state.addressId !== null &&
                                            <>
                                                <Headline type='subheads' title={`${addressDetails.name} | ${addressDetails.type}`} />
                                                <Gap height={10} />
                                                <Subtext size={14} color='#000' title={`Phone number: ${addressDetails.telp}`} />
                                                <Gap height={10} />
                                                <Subtext size={14} title={`${addressDetails.address}, ${addressDetails.city}, ${addressDetails.province}, ${addressDetails.zipcode} - ${addressDetails.country}`} />
                                                <Gap height={20} />
                                            </>
                                        }
                                        <Button variant='outline-round' style={{ width: 210 }} title='Choose another address' onClick={() => this.setState({ modalAddress: true })} />
                                        <ChooseAddress data={this.state.myAddress} parentCallback={this.handleCallbackId} show={this.state.modalAddress} onHide={() => this.setState({ modalAddress: false })} />
                                    </div>

                                    {cart !== undefined && cart.cartItems.map((item) => {
                                        return (
                                            <div key={item.id} className='item__details'>
                                                <div className='product__items'>
                                                    <img className='item__images' src={`${process.env.REACT_APP_API_URL}/images/products/${item.images[0]}`} alt={`${item.product_name}-img`} />
                                                    <div className='item__description'>
                                                        {item.product_name.length > 25 ? (
                                                            <Headline type='subheads' title={`${item.product_name.substr(0, 70)}...`} />
                                                        ) : (
                                                                <Headline type='subheads' title={item.product_name} />
                                                            )}
                                                        <Gap height={4} />
                                                        <Subtext title={item.store} />
                                                    </div>
                                                    <Headline type='subheads' title={formatCurrency(item.total)} />
                                                </div>
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
                                            <Headline type='h3' title={formatCurrency(cart.total)} />
                                        </div>
                                        <div className='total__price'>
                                            <Subtext title='Delivery' size={16} />
                                            <Headline type='h3' title={formatCurrency(delivery)} />
                                        </div>

                                        <hr style={{ border: 'none', height: 2, color: '#9B9B9B', backgroundColor: '#9B9B9B' }} />

                                        <div className='total__price'>
                                            <Headline type='subheads' title='Shopping summary' />
                                            <Headline type='h3' style={{ color: '#db3022' }} title={formatCurrency(cart.total + delivery)} />
                                        </div>
                                        <Gap height={30} />
                                        <Button variant='primary-round' title='Select payment' onClick={() => this.setState({ modalPayment: true })} />
                                        <Payment
                                            show={this.state.modalPayment}
                                            onHide={() => this.setState({ modalPayment: false })}
                                            items={cart.cartItems}
                                            delivery={delivery}
                                            handleOrder={this.handleOrder}
                                        />
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
    profile: state.profile,
    cart: state.cart,
})

const mapDispatchToProps = { getMyAddress, getDetailMyAddress, insertMyTransactions, getMyTransactions, deleteFromCart }

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
