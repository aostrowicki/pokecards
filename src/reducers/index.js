import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import cartReducer from './cartReducer'
import typesReducer from './typesReducer'

export const loadCart = () => {
    const cartStorage = localStorage.getItem('cart');
    if (cartStorage === null) {
        return undefined;
    }
    return JSON.parse(cartStorage);
};

export const saveCart = (cart) => {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('cart', serializedCart);
}

const combinedReducers = combineReducers({
    pokemons: dataReducer,
    types: typesReducer,
    cart: cartReducer,
})

export default combinedReducers;