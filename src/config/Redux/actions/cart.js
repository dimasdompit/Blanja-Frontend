export const addToCart = (qty, product) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            qty: qty,
            product: product
        }
    }
}

export const addQuantity = (id) => {
    return {
        type: 'ADD_QUANTITY',
        payload: {
            id
        }
    }
}

export const subtractQuantity = (id) => {
    return {
        type: 'SUBTRACT_QUANTITY',
        payload: {
            id
        }
    }
}

export const handleCheckChildElements = (event) => {
    return {
        type: 'HANDLE_CHECK_CHILD_ELEMENT',
        payload: {
            event
        }
    }
}

export const handleAllCheck = (event) => {
    return {
        type: 'HANDLE_ALL_CHECK',
        payload: {
            event
        }
    }
}

export const removeFromCart = () => {
    return {
        type: 'REMOVE_FROM_CART'
    }
}

export const deleteFromCart = () => {
    return {
        type: 'DELETE_FROM_CART'
    }
}