import React, { Component } from 'react'
import { Gap, Headline, ModalFormAddress, Subtext } from '../../components';
import swal from 'sweetalert'

// Redux
import { connect } from 'react-redux';
import { getMyAddress, deleteMyAddress, getDetailMyAddress } from '../../config/Redux/actions/profile';

class ShippingAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myAddress: [],
            modalShow: false,
            addressId: null,
            isUpdate: false
        }
    }

    handleUpdateChange = (id) => {
        this.setState({
            isUpdate: true,
            modalShow: true
        })
        // this.getAddressDetailsFromAPI'/ios3fhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhyyy3
    }

    handleAddButton = () => {
        this.setState({
            addressId: null,
            isUpdate: false,
            modalShow: true
        })
    }

    getAddressDetailsFromAPI = async (id) => {
        const token = this.props.auth.data.token

        try {
            const response = await getDetailMyAddress(token, id)
            const newData = response.value.data.data
            console.log(newData)
        } catch (error) {
            console.log(error)
        }
    }

    getMyAddressFromAPI = async () => {
        const token = this.props.auth.data.token;

        try {
            const response = await this.props.getMyAddress(token);
            const newData = response.value.data.data;
            this.setState({ myAddress: newData });
        } catch (error) {
            console.log(error.response);
        }
    }

    deleteMyAddressFromAPI = (addressId) => {
        const token = this.props.auth.data.token
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this address!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    try {
                        const response = await this.props.deleteMyAddress(token, addressId)
                        console.log(response)
                        await this.getMyAddressFromAPI()
                        swal({
                            icon: "success",
                            title: `Delete Address Success`,
                            showConfirmaButton: false,
                        });
                    } catch (error) {
                        console.log(error.response)
                    }
                }
            });
    }

    componentDidMount() {
        this.getMyAddressFromAPI();
        // if (this.state.isUpdate) {
        //     this.getAddressDetailsFromAPI()
        // }
    }

    // componentDidUpdate() {
    //     if (this.state.isUpdate) {
    //         this.getAddressDetailsFromAPI()
    //     }
    // }

    render() {
        const { modalShow } = this.state
        const { profile } = this.props
        console.log(this.state.isUpdate)
        return (
            <div style={{ backgroundColor: 'white', borderRadius: 4, border: '1px solid #9B9B9B', paddingBottom: 15, marginTop: 100 }}>
                <div className='container__modal'>
                    <button className='btn__newAddress' disabled={profile.dataAddress.length >= 3} onClick={this.handleAddButton}>
                        Add new address
                    </button>
                    <ModalFormAddress
                        show={modalShow}
                        updateState={this.state.isUpdate}
                        addressIdState={this.state.addressId}
                        onHide={() => this.setState({ modalShow: false })}
                        onCancel={() => this.setState({ modalShow: false })}
                    />
                    {profile.dataAddress.length > 0 && profile.dataAddress.map((address) => {
                        return (
                            <div key={address.id} className='address__wrapper'>
                                <Headline type='subheads' title={`${address.name} | ${address.type}`} />
                                <Gap height={10} />
                                <Subtext size={14} title={`Phone Number: ${address.telp}`} />
                                <Gap height={10} />
                                <Subtext size={14} title={`${address.address}, ${address.city}, ${address.province}, ${address.zipcode} - ${address.country}`} />
                                <Gap height={20} />
                                <div style={{ display: 'flex' }}>
                                    <h6 className='btn__change__address' onClick={() => this.handleUpdateChange(address.id)}>Change Address</h6>
                                    <Gap width={20} />
                                    <h6 className='btn__change__address' onClick={() => this.deleteMyAddressFromAPI(address.id)}>Delete</h6>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
})

const mapDispatchToProps = { getMyAddress, deleteMyAddress, getDetailMyAddress }

export default connect(mapStateToProps, mapDispatchToProps)(ShippingAddress)
