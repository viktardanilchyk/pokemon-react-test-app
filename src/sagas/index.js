import { all, call, delay, put, takeEvery } from 'redux-saga/effects'
import pokemonsTableSaga from 'pages/pokemon-table/sagas'

function* rootSaga() {
  yield all([pokemonsTableSaga()]);
}

export default rootSaga;