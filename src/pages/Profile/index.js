import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Accordion } from '../../components'
import './profile.scss'

const Profile = () => {
    return (
        <div className='profile__wrapper'>
            <Container fluid>
                <Row>
                    <Col md={4} className='profile__content profile__left__section'>
                        <div>
                            <Accordion>
                                <div label='Store' icon='store'>
                                    <p>Store Profile</p>
                                </div>
                                <div label='Product' icon='product'>
                                    <p>My Products</p>
                                    <p>Selling Products</p>
                                </div>
                                <div label='Order' icon='order'>
                                    <p>My Order</p>
                                    <p>Order Cancel</p>
                                </div>
                            </Accordion>
                        </div>
                    </Col>
                    <Col md={8} className='profile__content profile__right__section'>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile
