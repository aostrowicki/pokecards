export const addItem = (item) => {
    return {
        type: 'NEW_ITEM',
        payload: { ...item, quantity: 1 }
    }
}

export const quantityUp = (quantity, index) => {
    return {
        type: 'QUANTITY_UP',
        payload: { quantity: quantity + 1, index: index },
    }
}

export const removeItem = (cart) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: cart,
    }
}

export const addToCart = (pokemon) => (dispatch, getState) => {
    const cart = getState().cart;
    if (cart.some(item => item.name === pokemon.name)) {
        const quantity = cart.find(item => item.name === pokemon.name).quantity;
        const index = cart.findIndex(item => item.name === pokemon.name);
        dispatch(quantityUp(quantity, index));
    }
    else
        dispatch(addItem(pokemon));
}

export const removeFromCart = (pokemon) => (dispatch, getState) => {
    const cart = getState().cart;
    const index = cart.findIndex(item => item.name === pokemon.name);
    cart.splice(index, 1);
    dispatch(removeItem(cart));
}