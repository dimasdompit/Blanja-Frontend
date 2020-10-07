import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { NavBar } from '../../components'
import Home from '../Home'
import Category from '../Category'
import ProductDetails from '../ProductDetails'
import MyBag from '../MyBag'
import './mainApp.scss'

const MainApp = (props) => {
    return (
        <div className='main-app-wrapper'>
            <NavBar />
            <div className="content-wrapper">
                <Container>
                    <Router>
                        <Switch>
                            <Route path='/profile/:id'>
                                <p>Ini Profile</p>
                            </Route>
                            <Route path='/checkout'>
                                <p>Ini Checkout</p>
                            </Route>
                            <Route path='/cart' component={MyBag} />
                            <Route path='/category/:id' component={Category} />
                            <Route path='/product-details/:id' component={ProductDetails} />
                            <Route path='/' component={Home} />
                        </Switch>
                    </Router>
                </Container>
            </div>
        </div>
    )
}

export default MainApp
