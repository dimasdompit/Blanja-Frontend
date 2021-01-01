const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: '',
    data: {},
}

const productImages = (state = initialState, action) => {
    switch (action.type) {
        /* =========================== GET ALL PRODUCT IMAGES =========================== */
        case 'GET_ALL_PRODUCT_IMAGES_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }

        case 'GET_ALL_PRODUCT_IMAGES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: 'DATA REJECTED'
            }

        case 'GET_ALL_PRODUCT_IMAGES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data,
            }

        /* =========================== GET PRODUCT IMAGES DETAILS =========================== */
        case 'GET_PRODUCT_IMAGES_DETAILS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }

        case 'GET_PRODUCT_IMAGES_DETAILS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: 'DATA REJECTED'
            }

        case 'GET_PRODUCT_IMAGES_DETAILS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                detailData: action.payload.data.data,
            }

        /* =========================== GET PRODUCT IMAGES BY PRODUCT ID =========================== */
        case 'GET_PRODUCT_IMAGES_BY_PRODUCT_ID_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }

        case 'GET_PRODUCT_IMAGES_BY_PRODUCT_ID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: 'DATA REJECTED'
            }

        case 'GET_PRODUCT_IMAGES_BY_PRODUCT_ID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data,
            }

        /* =========================== INSERT PRODUCT IMAGES =========================== */
        case 'INSERT_PRODUCT_IMAGES_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }

        case 'INSERT_PRODUCT_IMAGES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: 'DATA REJECTED'
            }

        case 'INSERT_PRODUCT_IMAGES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
            }

        /* =========================== UPDATE PRODUCT IMAGES =========================== */
        case 'UPDATE_PRODUCT_IMAGES_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }

        case 'UPDATE_PRODUCT_IMAGES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: 'DATA REJECTED'
            }

        case 'UPDATE_PRODUCT_IMAGES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
            }

        /* =========================== DELETE PRODUCT IMAGES =========================== */
        case 'DELETE_PRODUCT_IMAGES_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }

        case 'DELETE_PRODUCT_IMAGES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: 'DATA REJECTED'
            }

        case 'DELETE_PRODUCT_IMAGES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
            }

        default:
            return state;
    }
}

export default productImages;