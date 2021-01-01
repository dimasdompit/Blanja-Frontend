const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: '',
    dataTransactions: {},
    transactionDetails: {}
}

const transactions = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MY_TRANSACTIONS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false
            }

        case 'GET_MY_TRANSACTIONS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.message
            }

        case 'GET_MY_TRANSACTIONS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                dataTransactions: action.payload.data.data
            }

        case 'GET_TRANSACTION_DETAILS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false
            }

        case 'GET_TRANSACTION_DETAILS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.message
            }

        case 'GET_TRANSACTION_DETAILS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                transactionDetails: action.payload.data.data
            }

        case 'INSERT_MY_TRANSACTIONS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false
            }

        case 'INSERT_MY_TRANSACTIONS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.message
            }

        case 'INSERT_MY_TRANSACTIONS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
            }

        default:
            return state;
    }
}

export default transactions