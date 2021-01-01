import React, { Component } from 'react'
import { Gap, Headline, Subtext } from '../../components'
import './orderDetails.scss'

// Redux
import { connect } from 'react-redux'
import { getTransactionDetails } from '../../config/Redux/actions/transactions'
import { formatCurrency } from '../../utils'

class OrderDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transactionDetails: []
        }
    }

    getTransactionDetailsFromAPI = async () => {
        const token = this.props.auth.data.token;
        const id = this.props.match.params.id;

        try {
            const response = await this.props.getTransactionDetails(token, id)
            const newData = response.value.data.data
            this.setState({ transactionDetails: newData })
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.getTransactionDetailsFromAPI()
    }

    render() {
        const { transactionDetails } = this.state
        return (
            <div className='orderDetails__wrapper'>
                <Headline type='h3' style={{ fontSize: 20 }} title='Order Details' />
                <hr style={{ border: 'none', height: 2, color: '#D4D4D4', backgroundColor: '#D4D4D4' }} />
                <div style={{ backgroundColor: '#F5F5F5', padding: 10 }}>
                    <Headline type='subheads' title={`Order ID : ${this.props.match.params.id}`} />
                </div>
                <Gap height={15} />
                {
                    transactionDetails.map((item) => (
                        <div key={item.id} className='item__details'>
                            <div className='product__items'>
                                <img className='item__images' src={`${process.env.REACT_APP_API_URL}/images/products/${item.productImage}`} alt={`${item.productName}-img`} />
                                <div className='item__description'>
                                    {item.productName.length > 70 ? (
                                        <Headline type='subheads' title={`${item.productName.substr(0, 70)}...`} />
                                    ) : (
                                            <Headline type='subheads' title={item.productName} />
                                        )}
                                    <Gap height={4} />
                                    <Subtext title={`Size : ${item.size}`} />
                                    <Subtext title={`Color : ${item.color}`} />
                                </div>
                                <Headline type='subheads' title={`${item.qty} x`} />
                                <Gap width={5} />
                                <Headline type='subheads' title={formatCurrency(item.productPrice)} />
                            </div>
                        </div>
                    ))
                }
                <Gap height={15} />
                <Headline type='subheads' style={{ color: '#DB3022' }} title={`Delivery : ${formatCurrency(5)}`} />
                <Gap height={5} />
                <Headline type='h3' title={`Total : ${formatCurrency(transactionDetails.reduce((acc, curr) => acc + curr.productPrice * curr.qty, 5))}`} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    transactions: state.transactions
})

const mapDispatchToProps = {
    getTransactionDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)
