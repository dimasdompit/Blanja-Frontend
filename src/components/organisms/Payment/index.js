import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Button, Gap, Headline, RadioButton, Subtext } from '../../atoms'
import { GopayLogo, PosIndonesiaLogo, MastercardLogo } from '../../../assets'
import './payment.scss'
import { formatCurrency } from '../../../utils'

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
                                <RadioButton />
                            </div>
                        )
                    })}
                </div>

                <hr style={{ border: 'none', height: 3, color: '#F4F4F4', backgroundColor: '#F4F4F4' }} />

                <div className="summary__wrapper">
                    <Gap height={20} />
                    <Headline type='subheads' title='Shopping Summary' />
                    <Gap height={20} />
                    <div className='order__price'>
                        <Subtext size={16} title='Order' />
                        <Headline type='h3' title={formatCurrency(props.items.reduce((acc, curr) => acc + curr.price * curr.qty, 0))} />
                    </div>
                    <Gap height={14} />
                    <div className='order__price'>
                        <Subtext size={16} title='Delivery' />
                        <Headline type='h3' title={formatCurrency(props.delivery)} />
                    </div>
                </div>

                <Gap height={130} />

                <div className='summary__total__wrapper'>
                    <div className='summary__total__price'>
                        <Headline type='subheads' title='Shopping summary' />
                        <Gap height={8} />
                        <Headline type='h3' style={{ color: '#db3022' }} title={formatCurrency(props.items.reduce((acc, curr) => acc + (curr.price * curr.qty), props.delivery))} />
                    </div>
                    <Button variant='primary-round' title='Buy' onClick={props.handleOrder} style={{ flex: 1 }} padding={8} />
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default Payment;
