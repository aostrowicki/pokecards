const cartReducer = (state = [], action) => {

    switch (action.type) {
        case 'NEW_ITEM':
            return [...state, action.payload];
        case 'QUANTITY_UP':
            const newState = [...state];
            newState[action.payload.index] = { ...newState[action.payload.index], quantity: action.payload.quantity };
            return newState;
        case 'REMOVE_FROM_CART':
            return action.payload;
        default:
            return state;
    }
}

export default cartReducer;