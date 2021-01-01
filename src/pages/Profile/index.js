import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { Sidebar, SidebarItems } from '../../components'
import './profile.scss'

// Redux
import { connect } from 'react-redux'
import { OrderDetails } from '..'

const Profile = (props) => {
    const [user] = useState(props.auth.data);

    // const getAllCategoriesFromAPI = async () => {
    //     try {
    //         const response = await props.getAllCategories()
    //         const newData = response.value.data.data;
    //         setCategories(newData)
    //     } catch (error) {
    //         console.log(error.response)
    //     }
    // }

    useEffect(() => {
        // getAllCategoriesFromAPI()
        if (!props.auth.isLoggedIn) {
            props.history.push('/')
        }
    }, [])

    return (
        <>
            <Router >
                <div className='profile__wrapper'>
                    <Container fluid>
                        <Row>
                            <Col md={4} className='profile__left__section'>
                                <Sidebar />
                            </Col>
                            <Col md={8} className='profile__right__section'>
                                <Switch>
                                    {user.role === 0
                                        ? (
                                            <>
                                                {
                                                    SidebarItems.customer.map((route, index) => (
                                                        <Route
                                                            key={index}
                                                            path={route.path}
                                                            exact={route.exact}
                                                            children={<route.main />}
                                                        />
                                                    ))
                                                }
                                                <Route path='/profile/order-details/:id' component={OrderDetails} />
                                            </>
                                        )
                                        : (
                                            <>
                                                {
                                                    SidebarItems.seller.map((route, index) => (
                                                        <Route
                                                            key={index}
                                                            path={route.path}
                                                            exact={route.exact}
                                                            children={<route.main />}
                                                        />
                                                    ))
                                                }
                                                <Route path='/profile/order-details/:id' component={OrderDetails} />
                                            </>
                                        )
                                    }
                                </Switch>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Router >
        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
    conditions: state.conditions,
    colors: state.colors,
    categories: state.categories,
    sizes: state.sizes
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
