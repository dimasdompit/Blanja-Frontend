import React from 'react'
import MyAccount from "../../../pages/MyAccount";
import MyOrder from '../../../pages/MyOrder';
import ShippingAddress from '../../../pages/ShippingAddress';

const SidebarItems = {
    customer: [
        {
            name: "My account",
            path: '/profile',
            exact: true,
            main: () => <MyAccount />
        },
        {
            name: "Shipping address",
            path: '/profile/shipping-address',
            main: () => <ShippingAddress />
        },
        {
            name: "My order",
            path: '/profile/my-order',
            main: () => <MyOrder />
        }
    ],
    seller: [
        {
            name: 'Store profile',
            path: '/profile/store',
            exact: true,
            main: () => <h1>Store profile</h1>
        },
        {
            name: ''
        }
    ]
}

export default SidebarItems;