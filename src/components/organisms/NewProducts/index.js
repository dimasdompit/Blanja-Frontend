import React, { Component } from 'react'
import { Gap, Headline, Subtext } from '../../atoms'
import { Cards, Paginations } from '../../molecules'

// Redux
import { connect } from 'react-redux'
import { getAllProducts } from '../../../config/Redux/actions/products'
// import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'

class NewProducts extends Component {
    constructor(props) {
        super();
        this.state = {
            products: props.products.data ? props.products.data : []
        }
    }

    getParams = () => {
        return new URLSearchParams(this.props.search)
    }

    getNewProducts = async (search, sort, order, page, limit) => {
        await this.props.getAllProducts(search, sort, order, page, limit)
            .then(response => {
                this.setState({ products: this.props.products.data })
            })
            .catch(error => console.log(error))
    }

    handleParams = async (page) => {
        console.log(page)
        await this.getNewProducts(
            this.getParams().get('search'),
            this.getParams().get('sort'),
            this.getParams().get('order'),
            page,
            this.getParams().get('limit')
        )
    }

    componentDidMount() {
        // this.getNewProducts()
        this.handleParams()
    }

    render() {
        console.log(this.props)
        return (
            <>
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
                <Paginations
                    limit={this.getParams().get('limit') || 10}
                    page={this.getParams().get('page')}
                    queryParams={this.handleParams}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = { getAllProducts }

export default connect(mapStateToProps, mapDispatchToProps)(NewProducts)
