import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Button, Gap, Input, Subtext } from '../../components'
import { BlanjaLogo } from '../../assets'
import swal from 'sweetalert'

// Redux
import { connect } from 'react-redux';
import { verification } from '../../config/Redux/actions/auth'

class VerificationOTP extends Component {
    constructor(props) {
        super()
        this.state = {
            email: '',
            code: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            email: this.state.email,
            code: this.state.code
        }

        this.props.verification(data)
            .then(response => {
                console.log(response.value);
                const message = response.value.data.message;
                swal({
                    icon: 'success',
                    title: `${message}`,
                    button: false,
                    timer: 2000
                })
            })
            .then(() => {
                setTimeout(() => {
                    this.props.history.push('/reset-password')
                }, 2000)

            })
            .catch(error => {
                console.log(error.response)
                const errorMsg = error.response.data.message
                swal({
                    icon: 'error',
                    title: `${errorMsg}`,
                    button: true,
                    dangerMode: true
                })
            })
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

                        <form onSubmit={this.handleSubmit}>
                            {/* ==================== FORM INPUTS COMP ==================== */}
                            <Input type='text' placeholder='Email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                            <Gap height={16} />
                            <Input type='text' placeholder='OTP Code' value={this.state.code} onChange={(e) => this.setState({ code: e.target.value })} />
                            <Gap height={26} />

                            {/* ==================== BUTTON SIGN COMP ==================== */}
                            <Button variant='primary-round' title='Verify' padding={14} type='submit' />
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
})

const mapDispatchToProps = { verification }

export default connect(mapStateToProps, mapDispatchToProps)(VerificationOTP)
