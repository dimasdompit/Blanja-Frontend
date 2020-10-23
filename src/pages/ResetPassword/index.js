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
            confirmPassword: '',
        }
    }

    handleLogin = () => {

    }

    componentDidMount() {
        document.title = 'Blanja App - Reset Password';
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
                        <Gap height={22} />
                        <Subtext title='You need to change your password to activate your account!' textAlign='center' color='#db3022' size={14} />
                        <Gap height={50} />

                        {/* ==================== FORM INPUTS COMP ==================== */}
                        <Input type='text' placeholder='Email' />
                        <Gap height={16} />
                        <Input type='password' placeholder='New Password' />
                        <Gap height={16} />
                        <Input type='password' placeholder='Confirmation New Password' />
                        <Gap height={26} />

                        {/* ==================== BUTTON SIGN COMP ==================== */}
                        <Button variant='primary-round' title='Confirm' padding={14} onClick={() => this.props.history.push('/login')} />
                        <Gap height={40} />

                        {/* ==================== BUTTON REDIRECT COMP ==================== */}
                        <p className='login__redirect'>Don't have a Blanja account?
                        {' '}<span className='go__to' onClick={() => this.props.history.push('/register')}>Register</span>
                        </p>
                    </div>
                </div>
            </Container >
        )
    }
}

export default VerificationOTP
