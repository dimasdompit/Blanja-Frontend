import React, { useState } from 'react'
import { faBell, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container } from 'react-bootstrap';
import { BlanjaLogo } from '../../../assets'
import { Button, Gap, Icon, Search } from '../../atoms';
import { CartIcon, Filter } from '../../molecules';
import './NavBar.scss'

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [cartNotif] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [])

    return (
        <Navbar bg="white" expand="lg" className='navbar__container' fixed='top'>
            <Container>
                <Navbar.Brand className='brand__logo' href='/'><img src={BlanjaLogo} alt="Blanja-Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Gap width={60} />
                    <div className="search__area">
                        <Search placeholder='Search' />
                    </div>
                    <Gap width={11} />
                    <Filter />
                    <div className="cart__area">
                        <Gap width={100} />
                        <CartIcon data={cartNotif.length} onClick={() => window.location.assign('/cart')} />
                        {/* <Icon icon={faShoppingCart} onClick={() => window.location.assign('/cart')} /> */}
                        <Gap width={35} />
                        {!isLoggedIn ? (
                            <>
                                <Button variant='primary-round' title='Login' onClick={() => alert('Button Login')} />
                                <Gap width={20} />
                                <Button variant='outline-round' title='Signup' onClick={() => alert('Button Register')} />
                            </>
                        ) : (
                                <>
                                    <Icon icon={faBell} onClick={() => alert('icon bell')} />
                                    <Gap width={35} />
                                    <Icon icon={faEnvelope} onClick={() => alert('icon message')} />
                                    <Gap width={35} />
                                    <Icon icon={faUser} onClick={() => alert('icon user')} />
                                </>
                            )}



                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
