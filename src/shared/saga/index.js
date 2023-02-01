import { all, fork,takeEvery } from 'redux-saga/effects';

import { sagaActions } from "../sagaActions/Actions";

import loginSagas from './login';

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function* root() {
  try {
    yield all([

      ...forkList(loginSagas),

    ]);
  }
  catch (err) {
    console.error('Sagas failed to load with error: ', err);
  }
}


// export default function* root() {
//   yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
// }

// export function* fetchDataSaga() {
//   try {
//     let result = yield call(() =>
//       callAPI({ url: "https://5ce2c23be3ced20014d35e3d.mockapi.io/api/todos" })
//     );
//     yield put(fetchData(result.data));
//   } catch (e) {
//     yield put({ type: "TODO_FETCH_FAILED" });
//   }
// }