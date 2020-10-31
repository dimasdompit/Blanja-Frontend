import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container } from 'react-bootstrap';
import { BlanjaLogo } from '../../../assets'
import { Button, Gap, Icon, Search } from '../../atoms';
import { CartIcon, Filter, PopoverNotification, PopoverUsers } from '../../molecules';
import { useQueryState } from 'react-router-use-location-state';

// Redux
import { connect } from 'react-redux';
import { logout } from '../../../config/Redux/actions/auth'
import './NavBar.scss'

const NavBar = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [search, setSearch] = useQueryState('q', '')
    const [user, setUser] = useState({})
    const [cartNotif] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [])

    let history = useHistory()

    const handleLogout = () => {
        props.logout();
        window.location.reload();
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            setSearch(e.target.value);
        }
    }

    useEffect(() => {
        setUser(props.auth.data)
        setIsLoggedIn(props.auth.isLoggedIn)
    }, [])

    useEffect(() => {
        props.data(search)
    }, [search])

    return (
        <Navbar bg="white" expand="lg" className='navbar__container'>
            <Container>
                <Navbar.Brand className='brand__logo' href='/'><img src={BlanjaLogo} alt="Blanja-Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Gap width={60} />
                    <div className="search__area">
                        <Search placeholder='Search' onKeyDown={handleSearch} />
                    </div>
                    <Gap width={11} />
                    <Filter />
                    <div className="cart__area">
                        <Gap width={100} />
                        <CartIcon data={cartNotif.length} onClick={() => window.location.assign('/cart')} />
                        <Gap width={35} />
                        {isLoggedIn !== true || user.image === undefined ? (
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
    auth: state.auth
})

const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
