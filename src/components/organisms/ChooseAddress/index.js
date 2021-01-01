import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { Gap, Headline, Subtext } from '../../atoms'
import './chooseAddress.scss'

// Redux

const ChooseAddress = ({ show, onHide, parentCallback, data, ...props }) => {
    const [showForm, setShowForm] = useState(false)

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
                    <h3 className='headline__modal'>Choose another address</h3>
                    {/* <button className='btn__newAddress' onClick={() => setShowForm(true)}>
                        Add new address
                    </button> */}
                    <Gap height={20} />
                    {data.map((address) => {
                        return (
                            <div key={address.id} className='address__wrapper' onClick={(e) => {
                                parentCallback(address.id)
                            }}>
                                <Headline type='subheads' title={`${address.name} | ${address.type}`} />
                                <Gap height={10} />
                                <Subtext size={14} title={`Phone Number: ${address.telp}`} />
                                <Gap height={10} />
                                <Subtext size={14} title={`${address.address}, ${address.city}, ${address.province}, ${address.zipcode} - ${address.country}`} />
                                {/* <h6 className='btn__change__address' onClick={() => alert(`Change Address ID = ${address.id}`)}>Change Address</h6> */}
                            </div>
                        )
                    })}
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default withRouter(ChooseAddress)
