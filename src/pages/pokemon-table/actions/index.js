import { createAction } from 'redux-actions';

export const getPokemonListRequest = createAction('GET_POKEMON_LIST_REQUEST');
export const getPokemonListSuccess = createAction('GET_POKEMON_LIST_SUCCESS');
export const getPokemonListFailed = createAction('GET_POKEMON_LIST_FAILED');
