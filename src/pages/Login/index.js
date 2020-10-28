import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Button, Gap, Headline, Input, SignTabs } from '../../components'
import { BlanjaLogo } from '../../assets'

// Redux
import { connect } from 'react-redux';
import { login } from '../../config/Redux/actions/auth';

import './login.scss'

class Login extends Component {
    constructor(props) {
        super()
        this.state = {
            email: '',
            password: '',
        }
    }

    handleLogin = (event) => {
        event.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.login(data)
            .then(response => {
                alert(`${response.value.data.message}`)
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    componentDidMount() {
        document.title = 'Blanja App - login or sign up'
    }

    render() {
        return (
            <Container>
                <div className='login__wrapper'>
                    <div className='content__wrapper'>
                        {/* ==================== LOGO COMP ==================== */}
                        <div className='login__logo'>
                            <img src={BlanjaLogo} alt="blanja-logo" />
                        </div>

                        {/* ==================== HEADLINE COMP ====================   */}
                        <Gap height={50} />
                        <Headline type='h3' title='Please login with your account' style={{ textAlign: 'center' }} />
                        <Gap height={50} />

                        {/* ==================== NAVIGATION TABS COMP ====================  */}
                        <form onSubmit={this.handleLogin}>
                            <div className='login__tabs__wrapper'>
                                <SignTabs>
                                    {/* ==================== FORM INPUTS COMP ==================== */}
                                    <div label='Customer'>
                                        <div>
                                            <Gap height={40} />
                                            <Input type='text' placeholder='Email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                            <Gap height={16} />
                                            <Input type='password' placeholder='Password' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                                        </div>
                                    </div>
                                    <div label='Seller'>
                                        <div>
                                            <Gap height={40} />
                                            <Input type='text' placeholder='Email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                            <Gap height={16} />
                                            <Input type='password' placeholder='Password' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                                        </div>
                                    </div>
                                </SignTabs>
                            </div>

                            {/* ==================== FORGOT PASSWORD COMP ==================== */}
                            <Gap height={26} />
                            <p className='forgot__password' onClick={() => this.props.history.push('/forgot-password')}>Forgot Password?</p>
                            <Gap height={26} />

                            {/* ==================== BUTTON SIGN COMP ==================== */}
                            <Button variant='primary-round' title='Login' padding={14} type='submit' />
                            <Gap height={40} />
                        </form>

                        {/* ==================== BUTTON REDIRECT COMP ==================== */}
                        <p className='login__redirect'>Don't have a Blanja account?
                        {' '}<span className='go__to' onClick={() => this.props.history.push('/register')}>Register</span>
                        </p>
                    </div>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login)
