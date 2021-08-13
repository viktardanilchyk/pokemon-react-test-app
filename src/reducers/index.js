import { combineReducers } from 'redux';
import pokemonListReducer from '../pages/pokemon-table/reducers'

const rootReducer = combineReducers({
  pokemonListReducer
});

export default rootReducer;