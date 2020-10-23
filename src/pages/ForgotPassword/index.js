import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Button, Gap, Headline, Input } from '../../components'
import { BlanjaLogo } from '../../assets'

class ForgotPassword extends Component {
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
        document.title = 'Blanja App - forgot password'
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
                        <Headline type='h3' title='Reset password' style={{ textAlign: 'center' }} />
                        <Gap height={50} />

                        {/* ==================== FORM INPUTS COMP ==================== */}
                        <Input type='text' placeholder='Email' />

                        {/* ==================== BUTTON SIGN COMP ==================== */}
                        <Gap height={26} />
                        <Button variant='primary-round' title='Next' padding={14} onClick={() => this.props.history.push('/verificationOTP')} />
                        <Gap height={40} />

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

export default ForgotPassword
