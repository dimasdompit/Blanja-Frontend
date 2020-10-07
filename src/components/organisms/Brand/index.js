import React from 'react'
import { formatCurrency } from '../../../utils'
import { Color, Gap, Headline, Subtext } from '../../atoms'
import { Ratings } from '../../molecules'

const Brand = ({ title, store, price, color }) => {
    return (
        <>
            <Headline type='h2' title={title} />
            <Subtext title={store} size={16} />
            <Gap height={19} />
            <Ratings />
            <Gap height={32} />
            <Subtext title='Price' size={16} />
            <Headline type='h1' title={formatCurrency(price)} />
            <Gap height={30} />
            <Subtext title='Color' size={16} color='#000' />
            <Gap height={10} />
            <Color color={color} />
            <Gap height={30} />
        </>
    )
}

export default Brand
