const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: '',
    data: {}
}

const banners = (state = initialState, action) => {
    switch (action.type) {
        /* =============================== GET ALL BANNERS =============================== */
        case 'GET_ALL_BANNERS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case 'GET_ALL_BANNERS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.data.message
            }
        case 'GET_ALL_BANNERS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }

        /* =============================== GET BANNER DETAILS =============================== */
        case 'GET_BANNER_DETAILS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case 'GET_BANNER_DETAILS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.data.message
            }
        case 'GET_BANNER_DETAILS_FULFILLED':
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

export default banners;