import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Gap, Headline, Subtext } from '../../atoms'
import { Cards } from '../../molecules'

// Redux
import { connect } from 'react-redux';
import { getAllProducts } from '../../../config/Redux/actions/products'

export class PopularProducts extends Component {
    constructor(props) {
        super()
        this.state = {
            products: []
        }
    }

    getPopularProducts = async (search, page, limit) => {
        const randomSort = ['product_name', 'category', 'size', 'color', 'price', 'store'];
        const randomOrder = ['ASC', 'DESC'];

        const sorted = randomSort[Math.floor(Math.random() * randomSort.length)];
        const ordered = randomOrder[Math.floor(Math.random() * randomOrder.length)]

        await this.props.getAllProducts(search, sorted, ordered, page, limit)
            .then(response => this.setState({ products: response.value.data.data }))
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getPopularProducts()
    }

    render() {
        const { history } = this.props
        return (
            <>
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
                                onClick={() => history.push(`/product-details/${product.id}`)}
                            />
                        )
                    })}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = { getAllProducts }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PopularProducts))
