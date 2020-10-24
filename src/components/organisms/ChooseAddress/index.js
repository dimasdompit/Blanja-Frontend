import React from 'react'
import { Modal } from 'react-bootstrap'
import { Gap, Headline, Subtext } from '../../atoms'
import './chooseAddress.scss'

const ChooseAddress = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton style={{ border: 'none' }}>
            </Modal.Header>
            <Modal.Body>
                <div className='container__modal'>
                    <h3 className='headline__modal'>Choose another address</h3>
                    <button className='btn__newAddress' onClick={() => console.log('ok')}>
                        Add new address
                    </button>
                    {props.data.map((address) => {
                        return (
                            <div key={address.id} className='address__wrapper' onClick={() => alert(`Address ID = ${address.id}`)}>
                                <Headline type='subheads' title={`${address.name} | ${address.type}`} />
                                <Gap height={10} />
                                <Subtext size={14} title={`Phone Number: ${address.telp}`} />
                                <Gap height={10} />
                                <Subtext size={14} title={`${address.address}, ${address.city}, ${address.province}, ${address.zipcode} - ${address.country}`} />
                                <Gap height={20} />
                                <h6 className='btn__change__address' onClick={() => alert(`Change Address ID = ${address.id}`)}>Change Address</h6>
                            </div>
                        )
                    })}
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ChooseAddress
