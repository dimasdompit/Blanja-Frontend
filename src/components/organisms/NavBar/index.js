import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container } from 'react-bootstrap';
import { BlanjaLogo } from '../../../assets'
import { Button, Gap, Icon, IconProfile, Search } from '../../atoms';
import { CartIcon, Filter, PopoverNotification } from '../../molecules';
import axios from 'axios';
import './NavBar.scss'

const NavBar = () => {
    const [isLoggedIn] = useState(true)
    const [user, setUser] = useState({})
    const [cartNotif] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [])

    let history = useHistory()

    const getUserFromAPI = () => {
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/auth`
        }).then(response => {
            console.log(response)
            setUser(response.data)
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        getUserFromAPI();
    }, [])

    return (
        <Navbar bg="white" expand="lg" className='navbar__container'>
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
                                    <IconProfile profilePict={user.image} onClick={() => window.location.assign('/profile')} />
                                </>
                            )}



                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
