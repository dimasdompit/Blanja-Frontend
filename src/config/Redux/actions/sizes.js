import axios from 'axios';

export const getAllSizes = () => {
    return {
        type: 'GET_ALL_SIZES',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/sizes`
        })
    }
}

export const getSizeDetails = (id) => {
    return {
        type: 'GET_SIZE_DETAILS',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/sizes/${id}`
        })
    }
}