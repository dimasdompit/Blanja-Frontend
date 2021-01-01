import axios from 'axios';

export const getAllColors = () => {
    return {
        type: 'GET_ALL_COLORS',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/colors`
        })
    }
}

export const getColorDetails = (id) => {
    return {
        type: 'GET_COLOR_DETAILS',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/colors/${id}`
        })
    }
}