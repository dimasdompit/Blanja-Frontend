const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: '',
    data: {}
}

const conditions = (state = initialState, action) => {
    switch (action.type) {
        /* =============================== GET ALL CONDITIONS =============================== */
        case 'GET_ALL_CONDITIONS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case 'GET_ALL_CONDITIONS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.data.message
            }
        case 'GET_ALL_CONDITIONS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }

        /* =============================== GET CONDITION DETAILS =============================== */
        case 'GET_CONDITION_DETAILS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case 'GET_CONDITION_DETAILS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: 'DATA REJECTED'
            }
        case 'GET_CONDITION_DETAILS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }

        default:
            return state;
    }
}

export default conditions;