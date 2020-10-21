import React, { Component } from 'react'
import { Breadcrumbs, Cards, Gap, Headline } from '../../components'
import axios from 'axios'
import './category.scss'

class Category extends Component {
    constructor(props) {
        super()
        this.state = {
            products: [],
            categories: {}
        }
    }

    /* ============================= GET CATEGORY DETAILS FROM API ============================= */
    getCategoryDetailsFromAPI = () => {
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/categories/${this.props.match.params.id}`
        }).then(response => {
            this.setState({ categories: response.data })
        }).catch(error => {
            console.log(error)
        })
    }

    /* ============================= GET PRODUCTS BY CATEGORY ============================= */
    getProductByCategories = (category) => {
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/products`
        }).then(response => {
            this.setState({ products: response.data })
        }).catch(error => console.log(error))
    }

    componentDidMount() {
        this.getCategoryDetailsFromAPI()
        this.getProductByCategories()
    }

    render() {
        return (
            <div className='category__container'>
                <Breadcrumbs id={this.state.categories.id} category={this.state.categories.category} />
                <Gap height={23} />
                <Headline type='h1' title={this.state.categories.category} />
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

export default Category
