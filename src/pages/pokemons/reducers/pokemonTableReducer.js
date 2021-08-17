import { handleActions } from 'redux-actions';
import * as actionCreators from 'pages/pokemons/actions';

const defaultState = {
  pokemons: [],
  loading: true,
  error: null
};

const pokemonTableReducer = handleActions(
  {
    [actionCreators.getPokemonListRequest](state, action) {
      return defaultState
    },
    [actionCreators.getPokemonListSuccess](state, action) {
      const results = action.payload;
      return { ...state, pokemons: results, loading: false };
    }
  },
  defaultState
);

export default pokemonTableReducer;