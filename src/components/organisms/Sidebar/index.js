import React from 'react'
import { Link } from 'react-router-dom';
import SidebarItems from '../SidebarItems'
import Accordion from '../Accordion'
import './sidebar.scss'

// Redux
import { connect } from 'react-redux'
import { Headline } from '../../atoms';

const Sidebar = (props, { defaultActive }) => {
    // if no active prop is passed, use `1` instead.
    // const [activeIndex, setActiveIndex] = useState(defaultActive || 1);
    return (
        <div className='sidebar__wrapper'>
            <div className='sidebar__users'>
                <img className='sidebar__user__image' src={`${process.env.REACT_APP_API_URL}/images/users/${props.profile.dataProfile.image}`} alt={`${props.profile.dataProfile.image}`} />
                <Headline type='subheads' title={`${props.profile.dataProfile.name}`} />
            </div>
            {
                props.auth.data.role === 0
                    ? SidebarItems.customer.map((item, index) => (
                        // redirect user to a new route
                        <Link key={item.name} to={item.path} className='sidebar__link__style'>
                            <div className='sidebar__items'>
                                <div style={{ display: 'flex', marginBottom: 15, alignItems: 'center' }}>
                                    <div className='icon__items' style={{ backgroundColor: item.color }}>
                                        <img src={item.icon} alt="icons" />
                                    </div>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                    : (
                        <div>
                            <Accordion>
                                <div icon='store' label='Store'>
                                    <Link to={SidebarItems.seller[0].path} className='sidebar__link__style'>
                                        <div className='sidebar__items'>
                                            <p>{SidebarItems.seller[0].name}</p>
                                        </div>
                                    </Link>
                                </div>
                                <div icon='product' label='Product'>
                                    <Link to={SidebarItems.seller[1].path} className='sidebar__link__style'>
                                        <div className='sidebar__items'>
                                            <p>{SidebarItems.seller[1].name}</p>
                                        </div>
                                    </Link>
                                    <Link to={SidebarItems.seller[2].path} className='sidebar__link__style'>
                                        <div className='sidebar__items'>
                                            <p>{SidebarItems.seller[2].name}</p>
                                        </div>
                                    </Link>
                                </div>
                                <div icon='order' label='Order'>
                                    <Link to={SidebarItems.seller[3].path} className='sidebar__link__style'>
                                        <div className='sidebar__items'>
                                            <p>{SidebarItems.seller[3].name}</p>
                                        </div>
                                    </Link>
                                    <Link to={SidebarItems.seller[4].path} className='sidebar__link__style'>
                                        <div className='sidebar__items'>
                                            <p>{SidebarItems.seller[4].name}</p>
                                        </div>
                                    </Link>
                                </div>
                            </Accordion>
                        </div>
                    )
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps)(Sidebar);
