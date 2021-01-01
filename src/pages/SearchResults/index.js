import React, { Component } from 'react'
import { getURLParams } from '../../utils'
import './searchResults.scss'
import { Cards, Gap, Headline, NavBar, Paginations, SortProducts } from '../../components'

// Redux
import { connect } from 'react-redux'
import { getAllProducts } from '../../config/Redux/actions/products'

class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            sort: '',
            order: ''
        }
    }

    /* ================ Get URL Parameters method ================ */
    getParams = () => {
        return getURLParams(this.props.location.search)
    }

    /* ================ Get All Products ================ */
    fetchProducts = async (search, sort, order, page, limit) => {
        await this.props.getAllProducts(search, sort, order, page, limit)
            .then(response => {
                // const newData = response.value.data.data
                this.setState({ products: this.props.products.data })
            })
            .catch(error => console.log(error))
    }

    /* ================ Handle Params ================ */
    handleParams = async (page) => {
        await this.fetchProducts(
            this.getParams().get('search'),
            this.getParams().get('sort'),
            this.getParams().get('order'),
            page,
            this.getParams().get('limit')
        )
    }

    componentDidMount() {
        this.handleParams()
    }

    render() {
        return (
            <div className='search__container'>
                <NavBar />
                <div className='search__wrapper'>
                    <Headline type='h1' title='Search Result' />
                    <Gap height={25} />
                    <SortProducts data={this.handleParams} />
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
                    <Paginations page={this.getParams().get('page')} queryParams={this.handleParams} />
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    products: state.products
})

const mapDispatchToProps = { getAllProducts }

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
