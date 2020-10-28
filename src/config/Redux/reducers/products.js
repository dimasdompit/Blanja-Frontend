const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: '',
    data: {},
    pagination: {}
}

const products = (state = initialState, action) => {
    switch (action.type) {
        /* =========================== GET ALL PRODUCTS =========================== */
        case 'GET_ALL_PRODUCTS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }

        case 'GET_ALL_PRODUCTS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: 'DATA REJECTED'
            }

        case 'GET_ALL_PRODUCTS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data,
                pagination: action.payload.data.pagination
            }

        /* =========================== GET PRODUCTS BY CATEGORY =========================== */
        case 'GET_PRODUCTS_BY_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }

        case 'GET_PRODUCTS_BY_CATEGORY_REJECTED':
            console.log(action.payload.message)
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.message
            }

        case 'GET_PRODUCTS_BY_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data,
            }

        /* =========================== GET PRODUCTS BY USER ID =========================== */
        case 'GET_PRODUCTS_BY_USER_ID_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }

        case 'GET_PRODUCTS_BY_USER_ID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: 'DATA REJECTED'
            }

        case 'GET_PRODUCTS_BY_USER_ID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data,
            }

        /* =========================== GET PRODUCT DETAILS =========================== */
        case 'GET_PRODUCT_DETAILS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }

        case 'GET_PRODUCT_DETAILS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: 'DATA REJECTED'
            }

        case 'GET_PRODUCT_DETAILS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data,
            }

        default:
            return state;
    }
}

export default products;