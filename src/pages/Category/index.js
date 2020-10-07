import React, { Component } from 'react'
import { Breadcrumbs, Cards, Gap, Headline } from '../../components'
import { data } from '../../assets'
import './category.scss'

class Category extends Component {
    constructor(props) {
        super()
        this.state = {
            products: data.products,
            categories: data.categories[0]
        }
    }
    render() {
        return (
            <div className='category__container'>
                <Breadcrumbs id={this.state.categories.id} category={this.state.categories.category} />
                <Gap height={23} />
                <Headline type='h1' title={this.state.categories.category} />
                <Gap height={25} />

                <div class="product__cards">
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
