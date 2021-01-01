import axios from 'axios'

export const getUserById = (token) => {
    return {
        type: 'GET_USER_BY_ID',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/profile`,
            headers: {
                Authorization: token
            }
        }),
    };
};

export const editProfile = (token, data) => {
    return {
        type: 'EDIT_PROFILE',
        payload: axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API_URL}/api/v1/profile`,
            data: data,
            headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data"
            }
        }),
    };
};

export const getMyAddress = (token) => {
    return {
        type: 'GET_MY_ADDRESS',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/profile/my-address`,
            headers: {
                Authorization: token
            }
        }),
    };
};

export const getDetailMyAddress = (token, id) => {
    return {
        type: 'GET_DETAIL_MY_ADDRESS',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/profile/my-address/${id}`,
            headers: {
                Authorization: token
            }
        }),
    };
};

export const addMyAddress = (token, data) => {
    return {
        type: 'ADD_MY_ADDRESS',
        payload: axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/api/v1/profile/my-address`,
            data: data,
            headers: {
                Authorization: token
            }
        })
    }
}

export const editMyAddress = (token, id, data) => {
    return {
        type: 'EDIT_MY_ADDRESS',
        payload: axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API_URL}/api/v1/profile/my-address/${id}`,
            data: data,
            headers: {
                Authorization: token
            }
        })
    }
}

export const deleteMyAddress = (token, id) => {
    return {
        type: 'DELETE_MY_ADDRESS',
        payload: axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API_URL}/api/v1/profile/my-address/${id}`,
            headers: {
                Authorization: token
            }
        })
    }
}