import React, { useState } from 'react'
import swal from 'sweetalert'
import { Col, Modal, Row } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { Button, Gap, Input, Subtext } from '../../atoms'
import './modalFormAddress.scss'

// Redux
import { connect } from 'react-redux'
import { getDetailMyAddress, addMyAddress, getMyAddress, editMyAddress } from '../../../config/Redux/actions/profile'

const ModalFormAddress = ({ show, onCancel, updateState, addressIdState, onHide, auth, profile, getDetailMyAddress, addMyAddress, getMyAddress, ...props }) => {
    // const [addressId, setAddressId] = useState(null)
    // const [isUpdate, setIsUpdate] = useState(false)
    const [type, setType] = useState('')
    const [name, setName] = useState('')
    const [telp, setTelp] = useState('')
    const [address, setAddress] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [country, setCountry] = useState('')

    const postAddresToAPI = async () => {
        const token = auth.data.token

        const data = {
            name: name,
            type: type,
            address: address,
            telp: telp,
            city: city,
            zipcode: zipcode,
            province: province,
            country: country
        }

        try {
            const response = await addMyAddress(token, data)
            console.log(response)
            await getMyAddress(token)
            setType('')
            setName('')
            setTelp('')
            setAddress('')
            setZipcode('')
            setCity('')
            setProvince('')
            setCountry('')
            swal({
                icon: "success",
                title: `Add New Address Success`,
                showConfirmaButton: false,
                timer: 3000,
            });
        } catch (error) {
            console.log(error.response)
            const errorMsg = error.response.data.message;
            swal({
                icon: 'error',
                title: `${errorMsg}`,
                button: true,
                dangerMode: true
            })
        }
    }

    // const putAddressToAPI = async () => {
    //     const token = auth.data.token

    //     const data = {
    //         name: name,
    //         type: type,
    //         address: address,
    //         telp: telp,
    //         city: city,
    //         zipcode: zipcode,
    //         province: province,
    //         country: country
    //     }

    //     try {
    //         const response = await editMyAddress(token, addressId, data)
    //         console.log(response)
    //         swal({
    //             icon: "success",
    //             title: `Add New Address Success`,
    //             showConfirmaButton: false,
    //             timer: 3000,
    //         });
    //     } catch (error) {
    //         console.log(error.response)
    //         const errorMsg = error.response.data.message;
    //         swal({
    //             icon: 'error',
    //             title: `${errorMsg}`,
    //             button: true,
    //             dangerMode: true
    //         })
    //     }
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        // if (!isUpdate) {
        postAddresToAPI()
        //     } else {
        //         putAddressToAPI()
        //     }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton style={{ border: 'none' }}>
            </Modal.Header>
            <Modal.Body>
                <div className='container__modal'>
                    <h3 className='headline__modal'>Add new address</h3>
                    <Gap height={20} />
                    <div className='form__address__wrapper'>
                        <Subtext title='Save address as (ex : home address, office address, etc)' />
                        <Gap height={8} />
                        <Input type='text' value={type} onChange={(e) => setType(e.target.value)} />
                        <Row>
                            <Col sm={6}>
                                <Subtext title={`Recipient's Name`} />
                                <Gap height={8} />
                                <Input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                                <Subtext title='Address' />
                                <Gap height={8} />
                                <Input type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
                                <Subtext title='City or Subdistrict' />
                                <Gap height={8} />
                                <Input type='text' value={city} onChange={(e) => setCity(e.target.value)} />
                                <Subtext title='Country' />
                                <Gap height={8} />
                                <Input type='text' value={country} onChange={(e) => setCountry(e.target.value)} />
                            </Col>
                            <Col sm={6}>
                                <Subtext title={`Recipient's telephone number`} />
                                <Gap height={8} />
                                <Input type='text' value={telp} onChange={(e) => setTelp(e.target.value)} />
                                <Subtext title='Postal code / ZIP code' />
                                <Gap height={8} />
                                <Input type='text' value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                                <Subtext title='Province' />
                                <Gap height={8} />
                                <Input type='text' value={province} onChange={(e) => setProvince(e.target.value)} />
                            </Col>
                        </Row>
                    </div>
                    <Gap height={50} />
                    <div style={{ display: 'flex' }}>
                        <Button variant='outline-round' title='Cancel' onClick={onCancel} />
                        <Gap width={20} />
                        <Button variant='primary-round' title='Save' disabled={profile.dataAddress.length >= 3} onClick={handleSubmit} />
                    </div>
                </div>
                <Gap height={20} />
            </Modal.Body>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
})

const mapDispatchToProps = { addMyAddress, getMyAddress, getDetailMyAddress, editMyAddress }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ModalFormAddress))
