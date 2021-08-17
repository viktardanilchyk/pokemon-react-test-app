import { takeLatest, call, put } from "redux-saga/effects";
import API from "api";
import * as actionCreators from "pages/pokemon-table/actions"

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(actionCreators.getPokemonListRequest, workerSaga);
}

// function that makes the api request and returns a Promise for response
function* fetchItems() {
  let list = [];

  const response = yield API.get("/pokemon");
  const data = response.data.results;

  for (let item of data) {
    const itemResponse = yield API.get(item.url);
      const pokemon = itemResponse.data;
      list.push(pokemon);
  }

  return list;
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchItems);    
    const data = response;    
    // dispatch a success action to the store with the new dog
    yield put(actionCreators.getPokemonListSuccess(data));  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(actionCreators.getPokemonListFailed(error));
  }
}