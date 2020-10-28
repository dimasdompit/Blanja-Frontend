const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: '',
    data: {}
}

const categories = (state = initialState, action) => {
    switch (action.type) {
        /* =============================== GET ALL CATEGORIES =============================== */
        case 'GET_ALL_CATEGORIES_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case 'GET_ALL_CATEGORIES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.data.message
            }
        case 'GET_ALL_CATEGORIES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }

        /* =============================== GET CATEGORY DETAILS =============================== */
        case 'GET_CATEGORY_DETAILS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case 'GET_CATEGORY_DETAILS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: 'DATA REJECTED'
            }
        case 'GET_CATEGORY_DETAILS_FULFILLED':
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

export default categories;