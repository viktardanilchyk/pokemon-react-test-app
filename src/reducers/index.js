import { combineReducers } from 'redux';
import pokemonListReducer from '../pages/pokemons/reducers'

const rootReducer = combineReducers({
  pokemonListReducer
});

export default rootReducer;