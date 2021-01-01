import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Gap, Headline } from '../../components'
import { Table } from 'react-bootstrap'
import swal from 'sweetalert'
import { formatCurrency } from '../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import './myProducts.scss'

// Redux
import { connect } from 'react-redux'
import { getProductsByUserId, deleteProducts } from '../../config/Redux/actions/products'

class MyProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myProducts: [],
        }
    }

    getMyProductsFromAPI = async () => {
        const token = this.props.auth.data.token;
        const id = this.props.auth.data.id;

        try {
            const response = await this.props.getProductsByUserId(token, id);
            const newData = response.value.data.data;
            this.setState({ myProducts: newData })
        } catch (error) {
            console.log(error.response)
        }
    }

    handleDelete = (product_id) => {
        const token = this.props.auth.data.token;

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    try {
                        const response = await this.props.deleteProducts(token, product_id);
                        this.getMyProductsFromAPI()
                        console.log(response.value)
                    } catch (error) {
                        console.log(error.response);
                    }
                }
            });
    }

    componentDidMount() {
        this.getMyProductsFromAPI();
    }

    render() {
        const { myProducts } = this.state;
        return (
            <div className='myProducts__wrapper'>
                <Headline type='h3' style={{ fontSize: 20 }} title='My Products' />
                <Gap height={25} />
                <Table hover responsive='md' className='myProducts__table' style={{ borderSpacing: 0 }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {myProducts.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.product_name}</td>
                                <td>{formatCurrency(product.price)}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <div className='button__product edit' onClick={() => this.props.history.push({
                                        pathname: '/profile/selling-products',
                                        state: { productId: product.id, isUpdate: true }
                                    })}
                                    >
                                        <FontAwesomeIcon icon={faEdit} />
                                        <p>Edit</p>
                                    </div>
                                </td>
                                <td>
                                    <div className='button__product delete' onClick={() => this.handleDelete(product.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                        <p>Delete</p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    products: state.products
})

const mapDispatchToProps = {
    getProductsByUserId,
    deleteProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyProducts))
