import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './signTab.scss'

class SignTab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label)
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        let className = 'tab__list__item';

        if (activeTab === label) {
            className += ' tab__list__active';
        }

        return (
            <li className={className} onClick={onClick}>
                {label}
            </li>
        )
    }
}

export default SignTab
