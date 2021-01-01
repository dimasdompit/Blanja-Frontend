import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBar } from '../../components'
import Home from '../Home'
import Category from '../Category'
import ProductDetails from '../ProductDetails'
import MyBag from '../MyBag'
import Checkout from '../Checkout'
// import UserRoutes from '../UserRoutes'
import Profile from '../Profile'
import './mainApp.scss'

// Redux
import { connect } from 'react-redux';

const MainApp = (props) => {
    return (
        <div className='main-app-wrapper'>
            <NavBar />
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path={'/profile'} component={Profile} />
                        <Route path='/checkout' component={Checkout} />
                        <Route path='/cart' component={MyBag} />
                        <Route path='/category/:id' component={Category} />
                        <Route path='/product-details/:id' component={ProductDetails} />
                        <Route exact path='/' component={Home} />
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    products: state.products,
})

export default connect(mapStateToProps)(MainApp)
