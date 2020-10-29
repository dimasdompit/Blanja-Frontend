import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { Gap, Headline, IconProfile } from '../../atoms'

const PopoverUsers = (props) => {
    return (
        <OverlayTrigger
            trigger='click'
            placement='bottom'
            overlay={
                <Popover id='popover-positioned-bottom'>
                    <Popover.Content>
                        <Headline type='subheads' style={styles.text} title='Profile' onClick={() => window.location.assign('/profile')} />
                        <Gap height={10} />
                        <Headline type='subheads' style={styles.text} title='Log Out' onClick={props.logout} />
                    </Popover.Content>
                </Popover>
            }
        >
            <IconProfile profilePict={`${process.env.REACT_APP_API_URL}/images/users/${props.image}`} />
        </OverlayTrigger>
    )
}

const styles = {
    content__wrapper: {
        padding: 50
    },
    text: {
        fontSize: 14,
        cursor: 'pointer',
        fontFamily: 'MetropolisRegular'
    }
}

export default PopoverUsers
