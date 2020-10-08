import React, { Component } from 'react'
import { Brand, Breadcrumbs, Button, Cards, CircleButton, Gap, Headline, ProductDetailsImage, ProductInformation, Subtext } from '../../components'
import { data } from '../../assets'
import { Col, Row } from 'react-bootstrap'
import './productDetails.scss'

class ProductDetails extends Component {
    constructor(props) {
        super();
        this.state = {
            product: data.products[1],
            products: data.products,
            qty: 1,
            cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
            items: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
        }
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product;
    }

    getProductDetails = () => {
        const product = this.getItem(parseInt(this.props.match.params.id))
        this.setState({
            product: product
        })
    }

    handlePlus = () => {
        this.setState({
            qty: this.state.qty + 1
        })
    }

    handleMinus = () => {
        if (this.state.qty > 1) {
            this.setState({
                qty: this.state.qty - 1
            })
        }
    }

    addToCart = () => {
        const cartItems = this.state.cartItems.slice();
        const product = this.getItem(parseInt(this.props.match.params.id))
        console.log(product)
        const price = product.price;
        product.total = price
        let alreadyInCart = false;
        cartItems.forEach(item => {
            if (item.id === product.id) {
                alreadyInCart = true
                item.qty = item.qty + this.state.qty;
                if (item.qty >= item.stock) {
                    item.qty = item.stock
                }
            }
        });
        if (!alreadyInCart) {
            cartItems.push({ ...product, qty: this.state.qty, isChecked: false })
        }
        this.setState({ cartItems })
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }

    buyNow = () => {
        const items = this.state.items.slice();
        const product = this.getItem(parseInt(this.props.match.params.id))
        const price = product.price;
        product.total = price
        let alreadyAdd = false
        items.forEach((item, index) => {
            if (item.id !== product.id) {
                alreadyAdd = true;
                items.splice(0, items.length)
                items.push({ ...product, qty: this.state.qty, isChecked: false })
            }

            if (item.id === product.id) {
                alreadyAdd = true;
                items.splice(0, items.length)
                items.push({ ...product, qty: this.state.qty, isChecked: false })
            }
        })
        if (!alreadyAdd) {
            items.push({ ...product, qty: this.state.qty, isChecked: false })
        }
        this.setState({ items })
        localStorage.setItem("items", JSON.stringify(items))
        this.props.history.push('/checkout')
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.getProductDetails()
    }

    render() {
        const { product_name, description, category, store, price, color, size, condition_name, stock, images } = this.state.product;
        return (
            <div className='product__details__container'>
                <Breadcrumbs category={category} />

                <div className="top__content">
                    <Row>
                        <Col md={6}>
                            <div className="image__container">
                                {images.map((image, i) => {
                                    return (
                                        <ProductDetailsImage key={i} img={image} />
                                    )
                                })}
                            </div>
                        </Col>
                        <Col md={6}>
                            <Brand title={product_name} store={store} price={price} color={color} />
                            <div className="right__content__bottom">
                                <Row className='size__content'>
                                    <Col>
                                        <Subtext title='Size' size={16} color='#000' />
                                        <Gap height={5} />
                                        <Headline type='h3' title={size} />
                                    </Col>
                                    <Col className='details__pcs'>
                                        <CircleButton variant='minus' disabled={this.state.qty === 1} onClick={this.handleMinus} />
                                        <div className='details__qty'>{parseInt(this.state.qty)}</div>
                                        <CircleButton variant='plus' disabled={this.state.qty >= stock} onClick={this.handlePlus} />
                                    </Col>
                                </Row>
                                <Gap height={45} />
                                <div className='btn__content'>
                                    <Button variant='outline-round' title='Chat' padding={15} onClick={() => alert('Chat Button')} />
                                    <Gap width={20} />
                                    <Button variant='outline-round' title='Add bag' padding={15} onClick={this.addToCart} />
                                </div>
                                <Gap height={30} />
                                <Button variant='primary-round' title='Buy Now' padding={15} onClick={this.buyNow} />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="center__content">
                    <ProductInformation condition={condition_name} description={description} />
                </div>

                <hr style={{ border: 'none', height: 2, color: '#9B9B9B', backgroundColor: '#9B9B9B' }} />

                <div className="bottom__content">
                    <Headline type='h1' title='You can also like this' />
                    <Subtext title={`You've never seen it before!`} />
                    <Gap height={25} />
                    <div className="product__suggestion">
                        {this.state.products.map((product) => {
                            return (
                                <Cards key={product.id} id={product.id} title={product.product_name} store={product.store} image={product.images[0]} price={product.price} onClick={() => window.location.assign(`/product-details/${product.id}`)} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetails
