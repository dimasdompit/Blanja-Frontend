import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import './filter.scss'

const Filter = ({ ...props }) => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <style type="text/css">
                {`
                .btn-flat {
                background-color: white;
                border: 1px solid #adadad;
                color: #adadad
                }

                .btn-flat:hover {
                background-color: #DB3022;
                color: #fff;
                }

                .btn-xxl {
                padding: 1rem 1.5rem;
                font-size: 1.5rem;
                }
                `}
            </style>

            <Button variant='flat' onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon={faFilter} />
            </Button>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Filter
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Colors</h6>
                </Modal.Body>
                <Modal.Body>
                    <h6>Sizes</h6>
                </Modal.Body>
                <Modal.Body>
                    <h6>Category</h6>
                </Modal.Body>
                <Modal.Body>
                    <h6>Brand</h6>
                </Modal.Body>
                <Modal.Footer>
                    <Button>Discard</Button>
                    <Button>Apply</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Filter
