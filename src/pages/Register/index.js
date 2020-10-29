import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Button, Gap, Headline, Input, SignTabs } from '../../components'
import { BlanjaLogo } from '../../assets'
import swal from 'sweetalert'

// Redux
import { connect } from 'react-redux'
import { register } from '../../config/Redux/actions/auth'
// import './login.scss'

class Register extends Component {
    constructor(props) {
        super()
        this.state = {
            customer: {
                name: '',
                email: '',
                password: ''
            },
            seller: {
                name: '',
                email: '',
                telp: '',
                store: '',
                password: '',
                role: 1
            }
        }
    }

    handleSubmitCustomer = (event) => {
        event.preventDefault();

        const data = {
            name: this.state.customer.name,
            email: this.state.customer.email,
            password: this.state.customer.password
        }

        this.props.register(data)
            .then(response => {
                console.log(response);
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
                const errorMsg = error.response.data.message;
                swal({
                    icon: 'error',
                    title: `${errorMsg}`,
                    button: true,
                    dangerMode: true
                })
            })
    }

    handleSubmitSeller = (event) => {
        event.preventDefault();

        const data = {
            name: this.state.seller.name,
            email: this.state.seller.email,
            telp: this.state.seller.telp,
            store: this.state.seller.store,
            password: this.state.seller.password,
            role: this.state.seller.role
        }

        this.props.register(data)
            .then(response => {
                console.log(response);
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
        document.title = 'Blanja App - login or sign up'
    }

    render() {
        console.log(this.state.seller)
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
                                    <form onSubmit={this.handleSubmitCustomer}>
                                        <Gap height={40} />
                                        <Input type='text' placeholder='Name' value={this.state.customer.name || ''} onChange={(e) => this.setState({ customer: { ...this.state.customer, name: e.target.value } })} />
                                        <Gap height={16} />
                                        <Input type='text' placeholder='Email' value={this.state.customer.email || ''} onChange={(e) => this.setState({ customer: { ...this.state.customer, email: e.target.value } })} />
                                        <Gap height={16} />
                                        <Input type='password' placeholder='Password' value={this.state.customer.password || ''} onChange={(e) => this.setState({ customer: { ...this.state.customer, password: e.target.value } })} />
                                        <Gap height={26} />
                                        <Button variant='primary-round' title='Sign Up' padding={14} type='submit' />
                                    </form>
                                </div>
                                <div label='Seller'>
                                    <form onSubmit={this.handleSubmitSeller}>
                                        <Gap height={40} />
                                        <Input type='text' placeholder='Name' value={this.state.seller.name} onChange={(e) => this.setState({ seller: { ...this.state.seller, name: e.target.value } })} />
                                        <Gap height={16} />
                                        <Input type='text' placeholder='Email' value={this.state.seller.email} onChange={(e) => this.setState({ seller: { ...this.state.seller, email: e.target.value } })} />
                                        <Gap height={16} />
                                        <Input type='text' placeholder='Phone Number' value={this.state.seller.telp} onChange={(e) => this.setState({ seller: { ...this.state.seller, telp: e.target.value } })} />
                                        <Gap height={16} />
                                        <Input type='text' placeholder='Store name' value={this.state.seller.store} onChange={(e) => this.setState({ seller: { ...this.state.seller, store: e.target.value } })} />
                                        <Gap height={16} />
                                        <Input type='password' placeholder='Password' value={this.state.seller.password} onChange={(e) => this.setState({ seller: { ...this.state.seller, password: e.target.value } })} />
                                        <Gap height={26} />
                                        <Button variant='primary-round' title='Sign Up' padding={14} type='submit' />
                                    </form>
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

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = { register }

export default connect(mapStateToProps, mapDispatchToProps)(Register)
