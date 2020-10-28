import React, { Component } from 'react'
import { Banner, CardLoader, Cards, Carousel, Gap, Headline, Subtext } from '../../components'
import { Container } from 'react-bootstrap'

// Redux
import { connect } from 'react-redux';
import { getAllProducts } from '../../config/Redux/actions/products'

// Styling
import './home.scss'

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            products: [],
            isLoading: true,
        }
    }

    /** ======================================= GET ALL PRODUCTS FROM API ======================================== */
    getAllProductsFromAPI = () => {
        this.props.getAllProducts()
            .then(response => {
                this.setState({
                    products: response.value.data.data,
                    isLoading: false
                })
            }).catch(error => {
                console.log(error.message)
            })
    }

    componentDidMount() {
        this.getAllProductsFromAPI();
    }

    render() {
        return (
            <div className='home__wrapper'>
                <Container>
                    {this.state.isLoading
                        ? <CardLoader />
                        : (
                            <>
                                {/* ======= BANNER SECTION ======= */}
                                <Banner />
                                <Gap height={50} />

                                {/* ======= CATEGORY SECTION ======= */}
                                <Headline type='h1' title='Category' />
                                <Subtext title='What are you currently looking for' />
                                <Gap height={28} />
                                <Carousel />
                                <Gap height={35} />

                                {/* ======= NEW PRODUCTS SECTION ======= */}
                                <Headline type='h1' title='New' />
                                <Subtext title={`You've never seen it before!`} />
                                <Gap height={25} />
                                <div className="product__cards">
                                    {this.state.products.map((product) => {
                                        return (
                                            <Cards
                                                key={product.id}
                                                id={product.id}
                                                title={product.product_name}
                                                price={product.price}
                                                store={product.store}
                                                image={`${process.env.REACT_APP_API_URL}/images/products/${product.image}`}
                                                onClick={() => this.props.history.push(`/product-details/${product.id}`)}
                                            />
                                        )
                                    })}
                                </div>
                                <Gap height={25} />

                                {/* ======= POPULAR PRODUCTS SECTION ======= */}
                                <Headline type='h1' title='Popular' />
                                <Subtext title='Find clothes that are trending recently' />
                                <Gap height={25} />
                                <div className="product__cards">
                                    {this.state.products.map((product) => {
                                        return (
                                            <Cards
                                                key={product.id}
                                                id={product.id}
                                                title={product.product_name}
                                                price={product.price}
                                                store={product.store}
                                                image={`${process.env.REACT_APP_API_URL}/images/products/${product.image}`}
                                                onClick={() => this.props.history.push(`/product-details/${product.id}`)}
                                            />
                                        )
                                    })}
                                </div>
                            </>
                        )}
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = { getAllProducts }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
