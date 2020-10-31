import React, { Component } from 'react'
import { Banner, CardLoader, Carousel, Gap, NewProducts, PopularProducts } from '../../components'
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
    getAllProductsFromAPI = async (search, sort, order, page, limit) => {
        await this.props.getAllProducts(search, sort, order, page, limit)
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
                                <Carousel />

                                <Gap height={35} />

                                {/* ======= NEW PRODUCTS SECTION ======= */}
                                <NewProducts search={this.props.location.search} />

                                <Gap height={25} />

                                {/* ======= POPULAR PRODUCTS SECTION ======= */}
                                <PopularProducts />
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
