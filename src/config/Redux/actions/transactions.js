import axios from 'axios'

export const getMyTransactions = (token) => {
    return {
        type: 'GET_MY_TRANSACTIONS',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/transactions/my-transactions`,
            headers: {
                Authorization: token
            }
        })
    }
}

export const getTransactionDetails = (token, id) => {
    return {
        type: 'GET_TRANSACTION_DETAILS',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/v1/transactions/detail/${id}`,
            headers: {
                Authorization: token
            }
        })
    }
}

export const insertMyTransactions = (token, data) => {
    return {
        type: 'INSERT_MY_TRANSACTIONS',
        payload: axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/api/v1/transactions`,
            data: data,
            headers: {
                Authorization: token
            }
        })
    }
}