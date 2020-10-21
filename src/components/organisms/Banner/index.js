import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import axios from 'axios'
import './banner.scss'


const Banner = () => {

    /* =============================== INITIAL STATES =============================== */
    const [images, setImages] = useState([])

    /* =============================== REACT-SLICK SLIDER SETTINGS =============================== */
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

    /* =============================== GET ALL BANNER FROM API =============================== */
    const getAllBannerFromAPI = () => {
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/banner`
        }).then(response => {
            setImages(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getAllBannerFromAPI()
    }, [])

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
