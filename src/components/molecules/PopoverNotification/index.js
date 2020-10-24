import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { Notify } from '../../../assets'
import { Icon } from '../../atoms'
import './popoverNotification.scss'

const PopoverNotification = () => {
    return (
        <>
            <OverlayTrigger
                trigger='click'
                placement='bottom'
                overlay={
                    <Popover id='popover-positioned-bottom' style={styles.popover__wrapper}>
                        <Popover.Content>
                            <img src={Notify} alt='Not-Yet-Notification' />
                        </Popover.Content>
                    </Popover>
                }
            >
                <Icon icon={faBell} />
            </OverlayTrigger>
        </>
    )
}

const styles = {
    popover__wrapper: {
        backgroundColor: '#fff',
        padding: '110px 69px 85px 68px'
    }
}

export default PopoverNotification
