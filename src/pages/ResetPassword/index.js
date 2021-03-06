import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Button, Gap, Headline, Input, Subtext } from '../../components'
import { BlanjaLogo } from '../../assets'
import swal from 'sweetalert'

// Redux
import { connect } from 'react-redux'
import { changePassword } from '../../config/Redux/actions/auth'

class VerificationOTP extends Component {
    constructor(props) {
        super()
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password
        }

        if (this.state.password !== this.state.confirmPassword) {
            swal({
                icon: 'error',
                title: "Confirmation Password doesn't match",
                button: true,
                dangerMode: true
            })
        } else {
            this.props.changePassword(data)
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
                        this.props.history.push('/login')
                    }, 2000);
                })
                .catch(error => {
                    console.log(error)
                    const errorMsg = error.response.data.message

                    swal({
                        icon: 'error',
                        title: `${errorMsg}`,
                        button: true,
                        dangerMode: true
                    })
                })
        }
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

                        <form onSubmit={this.handleSubmit}>
                            {/* ==================== FORM INPUTS COMP ==================== */}
                            <Input type='text' placeholder='Email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                            <Gap height={16} />
                            <Input type='password' placeholder='New Password' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                            <Gap height={16} />
                            <Input type='password' placeholder='Confirmation New Password' value={this.state.confirmPassword} onChange={(e) => this.setState({ confirmPassword: e.target.value })} />
                            <Gap height={26} />

                            {/* ==================== BUTTON SIGN COMP ==================== */}
                            <Button variant='primary-round' title='Confirm' padding={14} type='submit' />
                            <Gap height={40} />
                        </form>

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

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = { changePassword }

export default connect(mapStateToProps, mapDispatchToProps)(VerificationOTP)
