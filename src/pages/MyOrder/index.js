import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Gap, Headline } from '../../components'
import './myOrder.scss'

// Redux
import { connect } from 'react-redux'
import { getMyTransactions } from '../../config/Redux/actions/transactions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatCurrency, formatDate } from '../../utils'
import { Link } from 'react-router-dom'

class MyOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myTransactions: []
        }
    }

    getMyTransactions = async () => {
        const token = this.props.auth.data.token;

        try {
            const response = await this.props.getMyTransactions(token)
            const newData = response.value.data.data
            this.setState({ myTransactions: newData })
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.getMyTransactions()
    }

    render() {
        const { myTransactions } = this.state
        return (
            <div className='myOrder__wrapper'>
                <Headline type='h3' style={{ fontSize: 20 }} title='My Order' />
                <Gap height={25} />
                <Table hover responsive='md' className='myProducts__table' style={{ borderSpacing: 0 }}>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Shipping</th>
                            <th>Order Date</th>
                            <th>Total</th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {myTransactions.map((order, index) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{`${order.address}, ${order.city} - ${order.province} ${order.zipcode}`}</td>
                                <td>{formatDate(order.ordered_at)}</td>
                                <td>{formatCurrency(order.total)}</td>
                                <td><Link className='link__details' to={`/profile/order-details/${order.id}`}>See Details</Link></td>
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
    transactions: state.transactions
})

const mapDispatchToProps = { getMyTransactions }

export default connect(mapStateToProps, mapDispatchToProps)(MyOrder)
