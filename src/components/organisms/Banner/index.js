import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'

// Redux
import { connect } from 'react-redux'
import { getAllBanners } from '../../../config/Redux/actions/banners'

import './banner.scss'

const Banner = (props) => {

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
        props.getAllBanners()
            .then(response => {
                setImages(response.value.data.data)
            }).catch(error => {
                console.log(error)
            })
    }

    useEffect(getAllBannerFromAPI, [])

    return (
        <div>
            <Slider {...settings}>
                {images.map((banner, i) => {
                    return (
                        <div key={banner.id} className='banner__img'>
                            <img src={`${process.env.REACT_APP_API_URL}/images/banners/${banner.image}`} alt={`banner-${i + 1}`} />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

const mapStateToProps = (state) => ({
    banners: state.banners
})

const mapDispatchToProps = { getAllBanners }

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
