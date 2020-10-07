import React, { Component } from 'react'
import { data } from '../../assets'
import { Banner, Cards, Carousel, Gap, Headline, Subtext } from '../../components'
import './home.scss'

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            products: data.products
        }
    }
    render() {
        return (
            <div className='home__wrapper'>
                <Banner />
                <Gap height={50} />
                <Headline type='h1' title='Category' />
                <Subtext title='What are you currently looking for' />
                <Gap height={28} />
                <Carousel />
                <Gap height={35} />

                {/* ======= NEW PRODUCTS ======= */}
                <Headline type='h1' title='New' />
                <Subtext title={`You've never seen it before!`} />
                <Gap height={25} />
                <div className="product__cards">
                    {this.state.products.map((product) => {
                        return (
                            <Cards key={product.id} id={product.id} title={product.product_name} price={product.price} store={product.store} image={product.images[0]} onClick={() => this.props.history.push(`/product-details/${product.id}`)} />
                        )
                    })}
                </div>
                <Gap height={25} />

                {/* ======= POPULAR PRODUCTS ======= */}
                <Headline type='h1' title='Popular' />
                <Subtext title='Find clothes that are trending recently' />
                <Gap height={25} />
                <div className="product__cards">
                    {this.state.products.map((product) => {
                        return (
                            <Cards key={product.id} id={product.id} title={product.product_name} price={product.price} store={product.store} image={product.images[0]} onClick={() => this.props.history.push(`/product-details/${product.id}`)} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Home
