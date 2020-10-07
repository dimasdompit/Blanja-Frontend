import React, { useState } from 'react'
import Slider from 'react-slick'
import { Banner1, Banner2, Banner3, Banner4 } from '../../../assets'
import './banner.scss'


const Banner = () => {

    const [images, setImages] = useState([{ id: 1, image: Banner1 }, { id: 2, image: Banner2 }, { id: 3, image: Banner3 }, { id: 4, image: Banner4 }])

    const settings = {
        className: "center",
        dots: true,
        autoplay: true,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500
    }

    return (
        <div>
            <Slider {...settings}>
                {images.map((banner, i) => {
                    return (
                        <div key={banner.id} className='banner__img'>
                            <img src={banner.image} alt={`banner-${i + 1}`} />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Banner
