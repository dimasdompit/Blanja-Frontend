import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Button, Gap, Headline, Input } from '../../components'
import { BlanjaLogo } from '../../assets'
import swal from 'sweetalert'

// Redux
import { connect } from 'react-redux';
import { forgotPassword } from '../../config/Redux/actions/auth';

class ForgotPassword extends Component {
    constructor(props) {
        super()
        this.state = {
            email: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            email: this.state.email
        }

        this.props.forgotPassword(data)
            .then(response => {
                console.log(response.value);
            })
            .then(() => {
                setTimeout(() => {
                    this.props.history.push('/verification-otp')
                }, 1000)

            })
            .catch(error => {
                console.log(error.response)
                const errorMsg = error.response.data.message;

                swal({
                    icon: 'error',
                    title: `${errorMsg}`,
                    button: true,
                    dangerMode: true
                })
            })
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

                        <form onSubmit={this.handleSubmit}>
                            {/* ==================== FORM INPUTS COMP ==================== */}
                            <Input type='text' placeholder='Email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />

                            {/* ==================== BUTTON SIGN COMP ==================== */}
                            <Gap height={26} />
                            <Button variant='primary-round' title='Next' padding={14} type='submit' />
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

const mapDispatchToProps = { forgotPassword }

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
