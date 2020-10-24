import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Button, Gap, Headline, Input, SignTabs } from '../../components'
import { BlanjaLogo } from '../../assets'
// import './login.scss'

class Register extends Component {
    constructor(props) {
        super()
        this.state = {
            email: '',
            password: '',
        }
    }

    handleLogin = () => {

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
                        <Headline type='h3' title='Please sign up with your account' style={{ textAlign: 'center' }} />
                        <Gap height={50} />

                        {/* ==================== NAVIGATION TABS COMP ====================  */}
                        <div className='login__tabs__wrapper'>
                            <SignTabs>
                                {/* ==================== FORM INPUTS COMP ==================== */}
                                <div label='Customer'>
                                    <div>
                                        <Gap height={40} />
                                        <Input type='text' placeholder='Name' />
                                        <Gap height={16} />
                                        <Input type='text' placeholder='Email' />
                                        <Gap height={16} />
                                        <Input type='password' placeholder='Password' />
                                        <Gap height={26} />
                                        <Button variant='primary-round' title='Sign Up' padding={14} onClick={() => alert('Button Register Customer')} />
                                    </div>
                                </div>
                                <div label='Seller'>
                                    <div>
                                        <Gap height={40} />
                                        <Input type='text' placeholder='Name' />
                                        <Gap height={16} />
                                        <Input type='text' placeholder='Email' />
                                        <Gap height={16} />
                                        <Input type='text' placeholder='Phone Number' />
                                        <Gap height={16} />
                                        <Input type='text' placeholder='Store name' />
                                        <Gap height={16} />
                                        <Input type='password' placeholder='Password' />
                                        <Gap height={26} />
                                        <Button variant='primary-round' title='Sign Up' padding={14} onClick={() => alert('Button Register Seller')} />
                                    </div>
                                </div>
                            </SignTabs>
                        </div>
                        {/* ==================== BUTTON SIGN COMP ==================== */}
                        <Gap height={40} />

                        {/* ==================== BUTTON REDIRECT COMP ==================== */}
                        <p className='login__redirect'>Already have a Blanja account?
                        {' '}<span className='go__to' onClick={() => this.props.history.push('/login')}>Login</span>
                        </p>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Register
