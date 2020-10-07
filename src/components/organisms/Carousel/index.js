import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { data } from '../../../assets'
import './carousel.scss'

const Carousel = () => {

    const [categories, setCategories] = useState(data.categories)

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
