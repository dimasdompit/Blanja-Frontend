import axios from 'axios';

export const register = (data) => {
    return {
        type: 'REGISTER',
        payload: axios({
            method: "POST",
            url: `${process.env.REACT_APP_API_URL}/api/v1/auth/register`,
            data: data,
        }),
    };
};

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/api/v1/auth/login`,
            data: {
                email: data.email,
                password: data.password
            },
        }),
    }
}

export const forgotPassword = (data) => {
    return {
        type: 'FORGOT_PASSWORD',
        payload: axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/api/v1/auth/forgot-password`,
            data: {
                email: data.email
            },
        }),
    }
}

export const verification = (data) => {
    return {
        type: 'VERIFICATION',
        payload: axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/api/v1/auth/verify`,
            data: {
                email: data.email,
                code: data.code
            }
        })
    }
}

export const changePassword = (data) => {
    return {
        type: 'CHANGE_PASSWORD',
        payload: axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/api/v1/auth/change-password`,
            data: {
                email: data.email,
                password: data.password
            }
        })
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}