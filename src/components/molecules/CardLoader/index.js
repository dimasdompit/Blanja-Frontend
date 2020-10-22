import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import './cardLoader.scss'

const CardLoader = ({ ...props }) => {
    const [fakeData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    return (
        <div className='wrapper__loader'>
            {fakeData.map((data, i) => {
                return (
                    <Card className='loader__container' key={i} style={{ borderRadius: '8px' }} {...props}>
                        <div className='image__load color-change-2x'></div>
                        <Card.Body>
                            <div className='title__load color-change-2x'></div>
                            <div className='price__load color-change-2x'></div>
                            <div className='store__load color-change-2x'></div>
                        </Card.Body>
                        <Card.Footer style={{ backgroundColor: '#fff', border: 'none' }}>
                            <div className='rating__load color-change-2x' />
                        </Card.Footer>
                    </Card>
                )
            })}
        </div>
    )
}

export default CardLoader
