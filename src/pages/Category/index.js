import React, { Component } from 'react'
import { Breadcrumbs, CardLoader, Cards, EmptyCategories, Gap, Headline } from '../../components'
import { Container } from 'react-bootstrap'

// Redux
import { connect } from 'react-redux'
import { getCategoryDetails } from '../../config/Redux/actions/categories'
import { getProductsByCategories } from '../../config/Redux/actions/products'

// Styling
import './category.scss'

class Category extends Component {
    constructor(props) {
        super()
        this.state = {
            products: [],
            categories: {},
            isLoading: true,
        }
    }

    /* ============================= GET CATEGORY DETAILS FROM API ============================= */
    getCategoryDetailsFromAPI = async () => {
        const id = this.props.match.params.id;

        await this.props.getCategoryDetails(id)
            .then(response => {
                this.setState({ categories: response.value.data.data, isLoading: false })
            }).catch(error => {
                console.log(error)
            })
    }

    /* ============================= GET PRODUCTS BY CATEGORY ============================= */
    getProductByCategories = async () => {
        const id = this.props.match.params.id;

        await this.props.getProductsByCategories(id)
            .then(response => {
                this.setState({ products: response.value.data.data, isLoading: false })
            }).catch(error => console.log(error))
    }

    componentDidMount() {
        this.getCategoryDetailsFromAPI()
        this.getProductByCategories()
    }

    render() {
        return (
            <div className='category__container'>
                <Container>
                    {this.state.isLoading
                        /* ==================== LOADING COMPONENT ==================== */
                        ? <CardLoader />
                        : (
                            <>
                                {/* ====================== BREADCRUMB SECTION ====================== */}
                                <Breadcrumbs id={this.state.categories.id} category={this.state.categories.category} />
                                <Gap height={23} />
                                <Headline type='h1' title={this.state.categories.category} />
                                <Gap height={25} />

                                {/* ====================== RESULT PRODUCTS SECTION ====================== */}
                                {this.state.products.length !== 0
                                    ? (
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
                                    )
                                    : (
                                        <EmptyCategories />
                                    )}
                            </>
                        )}
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products,
    categories: state.categories
})

const mapDispatchToProps = { getCategoryDetails, getProductsByCategories }

export default connect(mapStateToProps, mapDispatchToProps)(Category)