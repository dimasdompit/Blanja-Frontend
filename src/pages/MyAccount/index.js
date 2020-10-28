import React, { Component } from 'react';
import { Headline } from '../../components'

class MyAccount extends Component {
    render() {
        return (
            <div className='myaccount__wrapper'>
                <Headline type='h3' style={{ fontSize: 20 }} title='My Profile' />
            </div>
        )
    }
};

export default MyAccount;