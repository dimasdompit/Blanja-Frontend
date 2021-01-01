const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
    itemSelected: [],
    total: 0
}

const cart = (state = initialState, action) => {
    if (action.type === 'ADD_TO_CART') {
        let items = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
        items = items.slice()
        let alreadyInCart = false
        items.forEach(item => {
            if (item.id === action.payload.product.id) {
                alreadyInCart = true
                item.qty = item.qty + action.payload.qty
                item.total = item.qty * item.price
                if (item.qty >= item.stock) {
                    item.qty = item.stock
                }
            }
        })
        if (!alreadyInCart) {
            items.push({ ...action.payload.product, qty: action.payload.qty, total: action.payload.qty * action.payload.product.price, isChecked: false })
        }
        const newTotal = items.reduce((acc, curr) => acc + curr.price * curr.qty, 0)
        localStorage.setItem("cartItems", JSON.stringify(items))

        return {
            ...state,
            cartItems: items,
            total: newTotal
        }
    }

    if (action.type === 'ADD_QUANTITY') {
        const cartItems = [...state.cartItems];
        const selectedProduct = cartItems.find(item => item.id === action.payload.id);
        const index = cartItems.indexOf(selectedProduct);
        const product = cartItems[index];

        product.qty = product.qty + 1;
        product.total = product.qty * product.price;

        const newTotal = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0)

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        return {
            ...state,
            cartItems: [...cartItems],
            total: newTotal
        }
    }

    if (action.type === 'SUBTRACT_QUANTITY') {
        const cartItems = [...state.cartItems];
        const selectedProduct = cartItems.find(item => item.id === action.payload.id);
        const index = cartItems.indexOf(selectedProduct);
        const product = cartItems[index];

        product.qty = product.qty - 1;
        product.total = product.qty * product.price;
        const newTotal = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0)

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        return {
            ...state,
            cartItems: [...cartItems],
            total: newTotal
        }
    }

    if (action.type === 'HANDLE_ALL_CHECK') {
        const cartItems = state.cartItems;
        const itemSelected = state.itemSelected;

        cartItems.forEach(item => item.isChecked = action.payload.event.target.checked)

        let alreadySelect = false;
        itemSelected.forEach(value => {
            alreadySelect = true;
            if (action.payload.event.target.checked === false) {
                itemSelected.splice(0, itemSelected.length)
            }
        })

        if (!alreadySelect && action.payload.event.target.checked === true) {
            cartItems.forEach(item => {
                itemSelected.push({ id: item.id })
            })
        }

        const newTotal = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0)

        return {
            ...state,
            cartItems: cartItems,
            itemSelected: itemSelected,
            total: newTotal
        }
    }

    if (action.type === 'HANDLE_CHECK_CHILD_ELEMENT') {
        /* ======== Instance cart items ========  */
        let cartItems = state.cartItems
        const product = cartItems.find(item => item.id === parseInt(action.payload.event.target.id));
        let itemSelected = state.itemSelected

        /* ====== Change isChecked value in Cart Items ======= */
        cartItems.forEach((item, index) => {
            if (item.id === parseInt(action.payload.event.target.value)) {
                item.isChecked = action.payload.event.target.checked
            }
        })

        /* ====== Check itemSelected. If it's alreadySelect, then delete the selected item ======= */
        let alreadySelect = false;
        itemSelected.forEach((value, index) => {
            if (value.id === product.id) {
                alreadySelect = true;
                if (action.payload.event.target.checked === false) {
                    itemSelected.splice(index, 1)
                }
            }
        })

        /* ====== if item selected is empty, push 1 item ====== */
        if (!alreadySelect) {
            itemSelected.push({ id: product.id })
        }

        const newTotal = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0)

        return {
            ...state,
            itemSelected: itemSelected,
            cartItems: cartItems,
            total: newTotal
        }
    }

    if (action.type === 'REMOVE_FROM_CART') {
        let cart = state.cartItems
        let itemSelected = state.itemSelected
        cart.forEach((item, index) => {
            const searchProductToDelete = itemSelected.find(value => value.id === item.id);
            if (searchProductToDelete !== -1 && searchProductToDelete !== undefined) {
                cart.splice(index, itemSelected.length)
                // localStorage.setItem("cartItems", cart.splice(index, itemSelected.length))
                itemSelected.splice(index, itemSelected.length)
            }
        })

        const newTotal = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0)

        localStorage.setItem("cartItems", JSON.stringify(cart))

        return {
            ...state,
            cartItems: cart,
            total: newTotal
        }
    }

    if (action.type === 'DELETE_FROM_CART') {
        localStorage.clear()
        return {
            cartItems: [],
            itemSelected: [],
            total: 0
        }
    }

    return state
}

export default cart;