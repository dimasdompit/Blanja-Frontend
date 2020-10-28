import axios from 'axios';

export const getAllCategories = () => {
    return {
        type: 'GET_ALL_CATEGORIES',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/categories`
        })
    }
}

export const getCategoryDetails = (id) => {
    return {
        type: 'GET_CATEGORY_DETAILS',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/categories/${id}`
        })
    }
}