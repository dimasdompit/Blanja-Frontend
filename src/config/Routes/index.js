import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, Register, MainApp, ForgotPassword, VerificationOTP, ResetPassword, SearchResults } from '../../pages'

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/forgot-password' component={ForgotPassword} />
                <Route path='/verification-otp' component={VerificationOTP} />
                <Route path='/reset-password' component={ResetPassword} />
                <Route path='/search' component={SearchResults} />
                <Route path='/' component={MainApp} />
            </Switch>
        </Router>
    )
}

export default Routes
