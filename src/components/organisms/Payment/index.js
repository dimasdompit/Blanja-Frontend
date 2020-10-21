import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Checkbox, Gap, Headline } from '../../atoms'
import { GopayLogo, PosIndonesiaLogo, MastercardLogo } from '../../../assets'
import './payment.scss'

const Payment = (props) => {

    const [payMethod] = useState([
        {
            id: 1,
            title: 'Gopay',
            image: GopayLogo
        },
        {
            id: 2,
            title: 'Pos Indonesia',
            image: PosIndonesiaLogo
        },
        {
            id: 3,
            title: 'Mastercard',
            image: MastercardLogo
        }
    ])

    return (
        <Modal
            {...props}
            size="md"
            centered
        >
            <Modal.Header closeButton style={{ boxShadow: '0px 0px 6px rgba(53, 50, 50, 0.25)' }}>
                <Headline type='h2' title='Payment' />
            </Modal.Header>
            <Modal.Body>
                <div className='container__modal'>
                    <Gap height={10} />
                    <Headline type='subheads' title='Payment method' />
                    {payMethod.map((pay) => {
                        return (
                            <div key={pay.id} className='payments__wrapper'>
                                <img src={pay.image} alt={`${pay.title}-logo`} />
                                <Headline type='subheads' title={pay.title} />
                                <Checkbox />
                            </div>
                        )
                    })}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <p>Shopping Summary</p>
            </Modal.Footer>
        </Modal>
    )
}

export default Payment;
