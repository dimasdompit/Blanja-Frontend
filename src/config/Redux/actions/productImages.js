import axios from 'axios';

export const getAllProductImages = () => {
    return {
        type: 'GET_ALL_PRODUCT_IMAGES',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/product-images`
        })
    }
}

export const getProductImagesDetails = (id) => {
    return {
        type: 'GET_PRODUCT_IMAGES_DETAILS',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/product-images/${id}`
        })
    }
}

export const getProductImagesByProductId = (productId) => {
    return {
        type: 'GET_PRODUCT_IMAGES_BY_PRODUCT_ID',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/product-images/product/${productId}`
        })
    }
}

// INSERT PRODUCT IMAGES
export const insertProductImages = (token, data) => {
    return {
        type: 'INSERT_PRODUCT_IMAGES',
        payload: axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/api/v1/product-images`,
            data: data,
            headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data"
            }
        })
    }
}

// UPDATE PRODUCT IMAGES
export const updateProductImages = (token, id, data) => {
    return {
        type: 'UPDATE_PRODUCT_IMAGES',
        payload: axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API_URL}/api/v1/product-images/${id}`,
            data: data,
            headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data"
            }
        })
    }
}

// DELETE PRODUCT IMAGES
export const deleteProductImages = (token, id) => {
    return {
        type: 'DELETE_PRODUCT_IMAGES',
        payload: axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API_URL}/api/v1/product-images/${id}`,
            headers: {
                Authorization: token
            }
        })
    }
}