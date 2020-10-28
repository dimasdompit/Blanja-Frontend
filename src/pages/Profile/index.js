import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { Accordion, Sidebar, SidebarItems } from '../../components'
import UserRoutes from '../UserRoutes'
import './profile.scss'
import axios from 'axios'

const Profile = (props) => {
    const [user, setUser] = useState({});

    const getUserFromAPI = () => {
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/auth`
        })
            .then(response => {
                console.log(response.data)
                setUser(response.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getUserFromAPI()
    }, [])
    return (
        <Router>
            <div className='profile__wrapper'>
                <Container fluid>
                    <Row>
                        <Col md={4} className='profile__left__section'>
                            <Sidebar />
                        </Col>
                        <Col md={8} className='profile__right__section'>
                            <Switch>
                                {user.role === 1
                                    ? (
                                        SidebarItems.customer.map((route, index) => (
                                            <Route
                                                key={index}
                                                path={route.path}
                                                exact={route.exact}
                                                children={<route.main />}
                                            />
                                        ))
                                    )
                                    : (
                                        SidebarItems.customer.map((route, index) => (
                                            <Route
                                                key={index}
                                                path={route.path}
                                                exact={route.exact}
                                                children={<route.main />}
                                            />
                                        ))
                                    )
                                }
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    )
}

export default Profile
