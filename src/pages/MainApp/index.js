import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { NavBar } from '../../components'
import Home from '../Home'
import Category from '../Category'
import ProductDetails from '../ProductDetails'
import MyBag from '../MyBag'
import Checkout from '../Checkout'
import './mainApp.scss'
import Profile from '../Profile'

const MainApp = () => {
    return (
        <div className='main-app-wrapper'>
            <NavBar />
            <div className="content-wrapper">
                {/* <Container> */}
                <Router>
                    <Switch>
                        <Route path='/profile' component={Profile} />
                        <Route path='/checkout' component={Checkout} />
                        <Route path='/cart' component={MyBag} />
                        <Route path='/category/:id' component={Category} />
                        <Route path='/product-details/:id' component={ProductDetails} />
                        <Route path='/' component={Home} />
                    </Switch>
                </Router>
                {/* </Container> */}
            </div>
        </div>
    )
}

export default MainApp
