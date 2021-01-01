import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container } from 'react-bootstrap';
import { BlanjaLogo } from '../../../assets'
import { Button, Gap, Icon, Search } from '../../atoms';
import { CartIcon, Filter, PopoverNotification, PopoverUsers } from '../../molecules';
import { useQueryState } from 'react-router-use-location-state';

// Redux
import { connect } from 'react-redux';
import { getAllProducts } from '../../../config/Redux/actions/products'
import { getUserById } from '../../../config/Redux/actions/profile'
import { logout } from '../../../config/Redux/actions/auth'
import './NavBar.scss'

const NavBar = (props) => {
    // Initializiation if user isLoggedIn
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // Initialization search using useQueryState
    const [search, setSearch] = useQueryState('search', '')
    // Init user data
    const [user, setUser] = useState(props.profile.dataProfile)

    let history = useHistory()

    /* ================ Handle Logout function ================ */
    const handleLogout = () => {
        props.logout();
        window.location.reload();
    }

    /* ================ Handle Search ================ */
    const handleSearch = (e) => {
        // If user click Enter
        if (e.key === 'Enter') {
            setSearch(e.target.value);
            // handleParams(search)
            props.history.push(`/search?search=${e.target.value}`)
            window.location.reload()
        }
    }

    const getUserFromAPI = async () => {
        const token = props.auth.data.token;
        try {
            const response = await props.getUserById(token)
            const newData = response.value.data.data;
            setUser(newData)
        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        getUserFromAPI()
        setIsLoggedIn(props.auth.isLoggedIn)
    }, [])

    return (
        <Navbar bg="white" expand="lg" className='navbar__container' fixed='top'>
            <Container>
                <Navbar.Brand className='brand__logo' href='/'><img src={BlanjaLogo} alt="Blanja-Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Gap width={60} />
                    <div className="search__area">
                        <Search placeholder='Search' onKeyDown={handleSearch} />
                    </div>
                    {/* <Gap width={11} />
                    <Filter /> */}
                    <div className="cart__area">
                        <Gap width={100} />
                        <CartIcon data={props.cart !== undefined ? props.cart.cartItems.length : null} onClick={() => window.location.assign('/cart')} />
                        <Gap width={35} />
                        {isLoggedIn !== true ? (
                            <>
                                <Button variant='primary-round' title='Login' onClick={() => history.push('/login')} />
                                <Gap width={20} />
                                <Button variant='outline-round' title='Signup' onClick={() => history.push('/register')} />
                            </>
                        ) : (
                                <>
                                    <PopoverNotification />
                                    <Gap width={35} />
                                    <Icon icon={faEnvelope} onClick={() => alert('icon message')} />
                                    <Gap width={35} />
                                    <PopoverUsers image={user.image} logout={handleLogout} />
                                </>
                            )}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    products: state.products,
    profile: state.profile,
    cart: state.cart
})

const mapDispatchToProps = { getAllProducts, getUserById, logout }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar))
