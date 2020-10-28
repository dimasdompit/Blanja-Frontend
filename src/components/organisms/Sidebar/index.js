import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SidebarItems from '../SidebarItems'
import './sidebar.scss'

const Sidebar = (props, { defaultActive }) => {
    // if no active prop is passed, use `1` instead.
    // const [activeIndex, setActiveIndex] = useState(defaultActive || 1);
    return (
        <div className='sidebar__wrapper'>
            {
                SidebarItems.customer.map((item, index) => (
                    // redirect user to a new route
                    <Link key={item.name} to={item.path} className='sidebar__link__style'>
                        <div /* active={index === activeIndex} */ className='sidebar__items'>
                            <p>{item.name}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar
