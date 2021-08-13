import { takeLatest, call, put } from "redux-saga/effects";
import API from "api";
import * as actionCreators from "pages/pokemon-table/actions"

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(actionCreators.getPokemonListRequest, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchPokemons() {
  return API.get("/pokemon");
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchPokemons);    
    const data = response.data;
    // dispatch a success action to the store with the new dog
    yield put(actionCreators.getPokemonListSuccess(data));  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(actionCreators.getPokemonListFailed(error));
  }
}