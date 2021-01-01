import React, { useEffect } from 'react'
import { Gap, Headline } from '../../atoms'
import { withRouter } from 'react-router-dom'
import { useQueryState } from 'react-router-use-location-state'
import './sortProducts.scss'

// Redux
import { connect } from 'react-redux'

const SortProducts = (props) => {
    const [sort, setSort] = useQueryState('sort', '')
    const [order, setOrder] = useQueryState('order', '')

    useEffect(() => {
        props.data(1)
    }, [sort, order])
    return (
        <div className='search__filter'>
            <div className='sort'>
                <Headline type='subheads' title='Sort by' />
                <Gap height={5} />
                <select name="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="">Latest</option>
                    <option value="product_name">Product Name</option>
                    <option value="price">Price</option>
                    <option value="stock">Stock</option>
                </select>
            </div>
            <div className='order'>
                <Headline type='subheads' title='Order by' />
                <Gap height={5} />
                <select name="order" value={order} onChange={(e) => setOrder(e.target.value)}>
                    <option value="">All Time</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    products: state.products
})

export default connect(mapStateToProps)(withRouter(SortProducts))
