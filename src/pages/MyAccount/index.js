import React, { Component } from 'react';
import { Button, Gap, Headline, InputProfile, ProfilePicture, Subtext } from '../../components'
import { withRouter } from 'react-router-dom'
import swal from 'sweetalert'
import './myAccount.scss'

// Redux
import { connect } from 'react-redux'
import { getUserById, editProfile } from '../../config/Redux/actions/profile'
import { formatDate } from '../../utils';

class MyAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            role: 0,
            name: '',
            email: '',
            birthday_date: '',
            store: '',
            telp: '',
            image: null,
            isUpdate: false
        }

        this.handleChangeImage = this.handleChangeImage.bind(this)
    }

    handleChangeImage = (event) => {
        event.preventDefault();

        this.setState({
            image: event.target.files[0],
            isUpdate: true
        })
    }

    getUserFromAPI = async () => {
        const token = this.props.auth.data.token;
        try {
            const response = await this.props.getUserById(token)
            const newData = response.value.data.data;
            this.setState({
                role: newData.role,
                name: newData.name,
                email: newData.email,
                birthday_date: formatDate(`${newData.birthday_date}`),
                store: newData.store,
                telp: newData.telp,
                image: newData.image
            })
        } catch (error) {
            console.log(error.response)
        }
    }


    handleSubmit = async (event) => {
        this.setState({ isUpdate: false })
        event.preventDefault();
        const token = this.props.auth.data.token;

        let formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('birthday_date', this.state.birthday_date)

        if (this.state.role === 1) {
            formData.append('store', this.state.store)
            formData.append('telp', this.state.telp)
        }

        if (this.state.isUpdate) {
            formData.append('image', this.state.image)
        }

        try {
            await this.props.editProfile(token, formData)
            this.getUserFromAPI()
            swal({
                icon: "success",
                title: `Edit Profile Success`,
                showConfirmaButton: false,
                timer: 3000,
            });
        } catch (error) {
            console.log(error.response)
            const errorMsg = error.response.data.message
            swal({
                icon: 'error',
                title: `${errorMsg}`,
                button: true,
                dangerMode: true
            })
        }
    }

    componentDidMount() {
        this.getUserFromAPI();
    }

    render() {
        console.log(this.state.isUpdate)
        const { role, image, name, email, birthday_date, store, telp } = this.state;
        return (
            <div className='myaccount__wrapper'>
                <Headline type='h3' style={{ fontSize: 20 }} title={role === 0 ? 'My Profile' : 'My Profile Store'} />
                <Gap height={6} />
                <Subtext title='Manage Your Profile Information' />
                <hr style={{ border: 'none', height: 1, color: '#9B9B9B', backgroundColor: '#9B9B9B' }} />
                <Gap height={34} />
                <form onSubmit={this.handleSubmit}>
                    <div className="myaccount__content">
                        <div style={{ flex: 1 }}>
                            <InputProfile label='Name' type='text' value={name} onChange={(e) => this.setState({ name: e.target.value })} />
                            <Gap height={22} />
                            <InputProfile label='Email' type='text' value={email} onChange={(e) => this.setState({ email: e.target.value })} disabled={true} />
                            {
                                role === 1
                                    ? (
                                        <>
                                            <Gap height={22} />
                                            <InputProfile label='Store' type='text' value={store} onChange={(e) => this.setState({ store: e.target.value })} />
                                            <Gap height={22} />
                                            <InputProfile label='Phone Number' type='text' value={telp} onChange={(e) => this.setState({ telp: e.target.value })} />
                                        </>
                                    )
                                    : null
                            }
                            <Gap height={22} />
                            <InputProfile label='Date of birth' type='date' value={birthday_date} onChange={(e) => this.setState({ birthday_date: e.target.value })} />
                        </div>
                        <Gap width={50} />
                        <div className='profile__image__wrapper'>
                            <ProfilePicture
                                path='users'
                                profilePicture={image}
                                src={
                                    this.state.isUpdate
                                        ? URL.createObjectURL(this.state.image)
                                        : `${process.env.REACT_APP_API_URL}/images/users/${image}`
                                }
                                onChange={this.handleChangeImage}
                            />
                        </div>
                    </div>
                    <Gap height={50} />
                    <div style={{ width: 150 }}>
                        <Button variant='primary-round' title='Save' type='submit' />
                    </div>
                </form>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    products: state.products,
    profile: state.profile
})

const mapDispatchToProps = { getUserById, editProfile }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyAccount));