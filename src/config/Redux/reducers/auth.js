const initialState = {
    isLoading: false,
    isError: false,
    isLoggedIn: false,
    errorMsg: '',
    data: {},
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        /* =========================== REGISTER =========================== */
        case 'REGISTER_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isLoggedIn: false
            }
        case 'REGISTER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isLoggedIn: false,
                errorMsg: action.payload.message
            }
        case 'REGISTER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isLoggedIn: false,
                data: action.payload.data.data
            }

        /* =========================== LOGIN =========================== */
        case 'LOGIN_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isLoggedIn: false
            }
        case 'LOGIN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isLoggedIn: false,
                errorMsg: action.payload.message
            }
        case 'LOGIN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isLoggedIn: true,
                data: action.payload.data.data
            }

        // /* =========================== Edit Profile =========================== */
        // case 'EDIT_PROFILE_PENDING':
        //     return {
        //         ...state,
        //         isLoading: true,
        //         isError: false,
        //     }
        // case 'EDIT_PROFILE_REJECTED':
        //     return {
        //         ...state,
        //         isLoading: false,
        //         isError: true,
        //         errorMsg: action.payload.message
        //     }
        // case 'EDIT_PROFILE_FULFILLED':
        //     return {
        //         ...state,
        //         isLoading: false,
        //         isError: false,
        //         data: action.payload.data.data
        //     }

        /* =========================== FORGOT PASSWORD =========================== */
        case 'FORGOT_PASSWORD_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isLoggedIn: false
            }
        case 'FORGOT_PASSWORD_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isLoggedIn: false,
                errorMsg: action.payload.message
            }
        case 'FORGOT_PASSWORD_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isLoggedIn: false,
                data: action.payload.data.data
            }

        /* =========================== VERIFICATION =========================== */
        case 'VERIFICATION_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isLoggedIn: false
            }
        case 'VERIFICATION_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isLoggedIn: false,
                errorMsg: action.payload.message
            }
        case 'VERIFICATION_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isLoggedIn: false,
                data: action.payload.data.data
            }

        /* =========================== CHANGE PASSWORD =========================== */
        case 'CHANGE_PASSWORD_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isLoggedIn: false
            }
        case 'CHANGE_PASSWORD_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isLoggedIn: false,
                errorMsg: action.payload.message
            }
        case 'CHANGE_PASSWORD_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isLoggedIn: false,
                data: action.payload.data.data
            }

        /* =========================== LOGOUT =========================== */
        case 'LOGOUT':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isLoggedIn: false,
                errorMsg: '',
                data: {}
            }

        default:
            return state;
    }
}

export default auth;