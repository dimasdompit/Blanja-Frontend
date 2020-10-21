import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import axios from 'axios'
import './carousel.scss'

const Carousel = () => {

    /* ======================== INITIAL STATES =========================== */
    const [categories, setCategories] = useState([])

    /* ======================== REACT-SLICK CAROUSEL SETTINGS =========================== */
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    /**
     * API CALL
     */

    /* ======================== GET ALL CATEGORIES FROM API =========================== */
    const getAllCategoriesFromAPI = () => {
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/categories`
        }).then(response => {
            // SET NEW STATE FOR CATEGORIES IMAGE
            setCategories(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getAllCategoriesFromAPI()
    }, [])

    return (
        <Slider {...settings}>
            {categories.map((category) => {
                return (
                    <Link key={category.id} to={`/category/${category.id}`}>
                        <div className='carousel__container'>
                            <img src={category.image} alt={`${category.category}-img`} />
                        </div>
                    </Link>
                )
            })}
        </Slider>
    )
}

export default Carousel
