import React, { useEffect } from 'react'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import { useQueryState } from 'react-router-use-location-state'
import { Gap } from '../../atoms'
import { connect } from 'react-redux'

const Paginations = (props) => {
    const [currentPage, setCurrentPage] = useQueryState('page', 1);
    const totalData = props.products.pagination.totalData;
    let limit = props.limit === null ? 10 : props.limit;
    let activePage = props.limit === null ? 1 : props.page;
    let totalPage = props.products.pagination.totalPage;

    let number = [];

    for (let i = 1; i <= totalPage; i++) {
        number.push(i)
    }

    useEffect(() => {
        props.queryParams(currentPage)
    }, [activePage])
    return (
        <>
            <div className='product__button'>

                {currentPage !== 1 && (
                    <Button variant='danger' onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(currentPage - 1)
                    }}>
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </Button>
                )}

                <Gap width={8} />

                {number.map((val, i) => {
                    return (
                        <Button
                            key={i}
                            variant='danger'
                            active={currentPage === val ? true : false}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(val)
                            }}
                        >
                            {val}
                        </Button>
                    )
                })}

                <Gap width={8} />

                {currentPage < totalPage && (
                    <Button variant='danger' onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(currentPage + 1)
                    }}>
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </Button>
                )}
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps)(Paginations)
