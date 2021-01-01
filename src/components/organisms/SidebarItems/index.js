import React from 'react'
import { OrderIcon, ShippingIcon, UserIcon } from '../../../assets';
import { MyAccount, MyProducts, SellingProducts, ShippingAddress, MyOrder, OrderDetails } from '../../../pages';
// import MyOrder from '../../../pages/MyOrder';
// import MyProducts from '../../../pages/MyProducts';
// import ShippingAddress from '../../../pages/ShippingAddress';

const SidebarItems = {
    customer: [
        {
            name: "My account",
            path: '/profile',
            exact: true,
            icon: UserIcon,
            color: '#456bf3',
            main: () => <MyAccount />
        },
        {
            name: "Shipping address",
            path: '/profile/shipping-address',
            icon: ShippingIcon,
            color: '#F36F45',
            main: () => <ShippingAddress />
        },
        {
            name: "My order",
            path: '/profile/my-order',
            icon: OrderIcon,
            color: '#F3456F',
            main: () => <MyOrder />
        },
    ],
    seller: [
        {
            label: 'Store',
            name: 'Store profile',
            path: '/profile',
            exact: true,
            main: () => <MyAccount />
        },
        {
            label: 'Product',
            name: 'My products',
            path: '/profile/my-products',
            exact: true,
            main: () => <MyProducts />
        },
        {
            label: 'Product',
            name: 'Selling products',
            path: '/profile/selling-products',
            exact: true,
            main: () => <SellingProducts />
        },
        {
            label: 'Order',
            name: 'My Order',
            path: '/profile/my-order',
            exact: true,
            main: () => <MyOrder />
        },
        {
            label: 'Order',
            name: 'Order Cancel',
            path: '/profile/order-cancel',
            exact: true,
            main: () => <h1>Order Cancel</h1>
        },
    ]
}

export default SidebarItems;