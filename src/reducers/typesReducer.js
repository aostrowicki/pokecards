const typesReducer = (state = [], action) => {

    switch (action.type) {
        case 'FETCH_TYPES':
            return action.payload;
            
        default:
            return state;
    }
}

export default typesReducer;