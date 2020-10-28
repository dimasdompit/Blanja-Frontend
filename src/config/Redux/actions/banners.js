import axios from 'axios';

export const getAllBanners = () => {
    return {
        type: 'GET_ALL_BANNERS',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/banners`
        })
    }
}

export const getBannerDetails = (id) => {
    return {
        type: 'GET_BANNER_DETAILS',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/banners/${id}`
        })
    }
}