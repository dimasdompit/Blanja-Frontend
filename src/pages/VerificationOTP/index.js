import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Button, Gap, Headline, Input, Subtext } from '../../components'
import { BlanjaLogo } from '../../assets'

class VerificationOTP extends Component {
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
        document.title = 'Blanja App - Verification OTP'
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
                        <Subtext title='We have sent an email containing an OTP Code to your email.' size={14} textAlign='center' />
                        <Subtext title='Please check your email.' size={14} textAlign='center' />

                        <Gap height={50} />

                        {/* ==================== FORM INPUTS COMP ==================== */}
                        <Input type='text' placeholder='Email' />
                        <Gap height={16} />
                        <Input type='text' placeholder='OTP Code' />
                        <Gap height={26} />

                        {/* ==================== BUTTON SIGN COMP ==================== */}
                        <Button variant='primary-round' title='Verify' padding={14} onClick={() => this.props.history.push('/reset-password')} />
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

export default VerificationOTP
