import axios from 'axios';

export const getAllConditions = () => {
    return {
        type: 'GET_ALL_CONDITIONS',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/conditions`
        })
    }
}

export const getConditionDetails = (id) => {
    return {
        type: 'GET_CONDITION_DETAILS',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/conditions/${id}`
        })
    }
}