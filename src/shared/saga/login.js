
import { call, put, select, take, takeLatest } from 'redux-saga/effects';
// import { getDeviceProperties } from '../../store/selectors';
// import getCoverageData, { showCoverageErrorModal } from '../../utilities/coverage';
// import { loginFast } from '../../utilities/fliptGQL';

import { sagaActions } from "../sagaActions/Actions";
//import { getDeviceInfo } from '../../utilities/platform';

import loginActions, { LoginTypes } from '../redux/login';


export default [

  loginUserWatcher,
];

/*
  Watchers
*/


function* loginUserWatcher() {
//  yield takeLatest(LoginTypes.LOGIN_USER, loginUserHandler);
  yield takeLatest(sagaActions.LOGIN_USER, loginUserHandler);

}
/*
  Handlers
*/


function* loginUserHandler({ payload }) {
  const toastProps = {
    type: 'error',
    message: 'Network Error.',
  };
   
  try {
    // const { data } = yield LocalStorage.getStore(global.CONSTANTS.USER_SECURE_STORE);

    // if (!data || payload.username !== data.username || payload.password !== data.password) {
    //   return;
    // }

    // const offlineErx = yield LocalStorage.getStore(global.CONSTANTS.OFFLINE_ERX);
    // const offlineBenefitsCard = yield LocalStorage.getStore(global.CONSTANTS.OFFLINE_BENEFITS_CARD);

    // yield put(erxActions.setPrescriptions({ pendingPrescriptions: offlineErx }));
    // yield put(appActions.saveOfflineBenefitsCard(offlineBenefitsCard));
    // yield put(navigateActions.navigateTo('OfflineErx'));
  } catch (err) {
    console.error('softLoginUserHandler: ', err);
   // yield put(appActions.showToast(toastProps));
  }
}