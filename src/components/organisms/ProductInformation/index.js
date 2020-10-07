import React from 'react'
import { Gap, Headline, Subtext } from '../../atoms'

const ProductInformation = ({ condition, description }) => {
    return (
        <>
            <Headline type='h1' title='Product Information' />
            <Gap height={40} />
            <Headline type='h2' style={{ fontSize: 20 }} title='Condition' />
            <Subtext title={condition} size={20} color='#DB3002' />
            <Gap height={40} />
            <Headline type='h2' style={{ fontSize: 20 }} title='Description' />
            <Gap height={10} />
            <Subtext title={description} size={14} />
            <Gap height={50} />
            <Headline type='h1' title='Product Review' />
        </>
    )
}

export default ProductInformation
