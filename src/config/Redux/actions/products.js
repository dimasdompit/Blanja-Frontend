import axios from 'axios';

// GET ALL PRODUCTS
export const getAllProducts = (search, sort, order, page, limit) => {
    return {
        type: 'GET_ALL_PRODUCTS',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/products`,
            params: {
                search: search,
                sort: sort || 'created_at',
                order: order || 'DESC',
                limit: limit || 10,
                page: page || 1
            }
        })
    }
}

// GET PRODUCTS BY CATEGORY
export const getProductsByCategories = (id) => {
    return {
        type: 'GET_PRODUCTS_BY_CATEGORY',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/products/category/${id}`,
        })
    }
}

// GET PRODUCTS BY USER ID
export const getProductsByUserId = (id) => {
    return {
        type: 'GET_PRODUCTS_BY_USER_ID',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/products/seller/${id}`
        })
    }
}

// GET PRODUCT DETAILS
export const getProductDetails = (id) => {
    return {
        type: 'GET_PRODUCT_DETAILS',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/products/${id}`
        })
    }
}

// ADD PRODUCTS
export const addProducts = (token, data) => {
    return {
        type: 'ADD_PRODUCTS',
        payload: axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/api/v1/products`,
            data: data,
            headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data"
            }
        })
    }
}

// UPDATE PRODUCTS
export const updateProducts = (token, id, data) => {
    return {
        type: 'UPDATE_PRODUCTS',
        payload: axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API_URL}/api/v1/products/${id}`,
            data: data,
            headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data"
            }
        })
    }
}

// DELETE PRODUCTS
export const deleteProducts = (token, id) => {
    return {
        type: 'DELETE_PRODUCTS',
        payload: axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API_URL}/api/v1/products/${id}`,
            headers: {
                Authorization: token
            }
        })
    }
}