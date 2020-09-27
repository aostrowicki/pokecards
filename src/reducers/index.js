import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import typesReducer from './typesReducer'

const combinedReducers = combineReducers({
    pokemons: dataReducer,
    types: typesReducer,
})

export default combinedReducers;