import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

// Redux
import { connect } from 'react-redux'
import { getAllCategories } from '../../../config/Redux/actions/categories'

import './carousel.scss'
import { Gap, Headline, Subtext } from '../../atoms'


const Carousel = (props) => {

    /* ======================== INITIAL STATES =========================== */
    const [categories, setCategories] = useState([])

    /* ======================== REACT-SLICK CAROUSEL SETTINGS =========================== */
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //             infinite: true,
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //             initialSlide: 2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    };


    /**
     * API CALL
     */

    /* ======================== GET ALL CATEGORIES FROM API =========================== */
    const getAllCategoriesFromAPI = () => {
        props.getAllCategories()
            .then(response => {
                // SET NEW STATE FOR CATEGORIES IMAGE
                setCategories(response.value.data.data)
            }).catch(error => {
                console.log(error)
            })
    }

    useEffect(getAllCategoriesFromAPI, [])

    return (
        <>
            <Headline type='h1' title='Category' />
            <Subtext title='What are you currently looking for' />
            <Gap height={28} />
            <Slider {...settings}>
                {categories.map((category) => {
                    return (
                        <Link key={category.id} to={`/category/${category.id}`}>
                            <div className='carousel__container'>
                                <img src={`${process.env.REACT_APP_API_URL}/images/categories/${category.image}`} alt={`${category.category}-img`} />
                            </div>
                        </Link>
                    )
                })}
            </Slider>
        </>
    )
}

const mapStateToProps = (state) => ({
    categories: state.categories
})

const mapDispatchToProps = { getAllCategories }

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)
