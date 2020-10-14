import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import cartReducer from './cartReducer'
import typesReducer from './typesReducer'

const combinedReducers = combineReducers({
    pokemons: dataReducer,
    types: typesReducer,
    cart: cartReducer,
})

export default combinedReducers;