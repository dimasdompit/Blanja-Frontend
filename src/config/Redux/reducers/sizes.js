const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: '',
    data: {}
}

const sizes = (state = initialState, action) => {
    switch (action.type) {
        /* =============================== GET ALL SIZES =============================== */
        case 'GET_ALL_SIZES_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case 'GET_ALL_SIZES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.data.message
            }
        case 'GET_ALL_SIZES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }

        /* =============================== GET SIZE DETAILS =============================== */
        case 'GET_SIZE_DETAILS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case 'GET_SIZE_DETAILS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: 'DATA REJECTED'
            }
        case 'GET_SIZE_DETAILS_FULFILLED':
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

export default sizes;