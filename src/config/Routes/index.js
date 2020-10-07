import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, Register, MainApp } from '../../pages'

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/' component={MainApp} />
            </Switch>
        </Router>
    )
}

export default Routes
