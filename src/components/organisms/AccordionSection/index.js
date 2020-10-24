import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { HomeIcon, PackageIcon, ShoppingCartIcon } from '../../../assets';
import './accordionSection.scss'

class AccordionSection extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
        isOpen: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        icon: PropTypes.string.isRequired,
    }

    onClick = () => {
        this.props.onClick(this.props.label);
    };

    render() {
        const {
            onClick,
            props: { isOpen, label, icon },
        } = this;
        return (
            <div
                style={{
                    color: isOpen ? '#000' : '#9b9b9b',
                    fontSize: '14px',
                    fontFamily: 'MetropolisRegular',
                    padding: '10px 10px',
                    transition: '.3s'
                }}
            >
                <div onClick={onClick} className='accordion__label__wrapper'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {/* ============================ ICON ACCORDION ============================ */}
                        {icon === 'store' ? (
                            <div className='accordion__icon icon__store'>
                                <img src={HomeIcon} alt="store-icon" />
                            </div>
                        )
                            : icon === 'product' ? (
                                <div className='accordion__icon icon__product'>
                                    <img src={PackageIcon} alt="product-icon" />
                                </div>
                            )
                                : icon === 'order' ? (
                                    <div className='accordion__icon icon__order'>
                                        <img src={ShoppingCartIcon} alt="order-icon" />
                                    </div>
                                )
                                    : <></>}

                        {label}
                    </div>
                    <div>
                        {!isOpen && <FontAwesomeIcon icon={faAngleDown} />}
                        {isOpen && <FontAwesomeIcon icon={faAngleUp} />}
                    </div>
                </div>

                {isOpen && (
                    <div style={{ color: '#000', padding: '14px 50px' }}>
                        {this.props.children}
                    </div>
                )}
            </div>
        )
    }
}

export default AccordionSection
