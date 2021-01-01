const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: '',
    dataProfile: {},
    dataAddress: [],
    addressDetails: {}
}

const profile = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_BY_ID_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'GET_USER_BY_ID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.message
            }
        case 'GET_USER_BY_ID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                dataProfile: action.payload.data.data
            }

        case 'EDIT_PROFILE_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'EDIT_PROFILE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.message
            }
        case 'EDIT_PROFILE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
            }

        case 'GET_MY_ADDRESS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'GET_MY_ADDRESS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.message
            }
        case 'GET_MY_ADDRESS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                dataAddress: action.payload.data.data
            }

        case 'GET_DETAIL_MY_ADDRESS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'GET_DETAIL_MY_ADDRESS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.message
            }
        case 'GET_DETAIL_MY_ADDRESS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                addressDetails: action.payload.data.data
            }

        case 'ADD_MY_ADDRESS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'ADD_MY_ADDRESS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.message
            }
        case 'ADD_MY_ADDRESS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
            }

        case 'EDIT_MY_ADDRESS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'EDIT_MY_ADDRESS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.message
            }
        case 'EDIT_MY_ADDRESS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
            }

        case 'DELETE_MY_ADDRESS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'DELETE_MY_ADDRESS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.message
            }
        case 'DELETE_MY_ADDRESS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
            }

        default:
            return state;
    }
}

export default profile;