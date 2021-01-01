const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: '',
    data: {}
}

const colors = (state = initialState, action) => {
    switch (action.type) {
        /* =============================== GET ALL COLORS =============================== */
        case 'GET_ALL_COLORS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case 'GET_ALL_COLORS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.data.message
            }
        case 'GET_ALL_COLORS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }

        /* =============================== GET COLOR DETAILS =============================== */
        case 'GET_COLOR_DETAILS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case 'GET_COLOR_DETAILS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: 'DATA REJECTED'
            }
        case 'GET_COLOR_DETAILS_FULFILLED':
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

export default colors;