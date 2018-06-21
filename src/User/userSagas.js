import { takeLatest, call, put } from 'redux-saga/effects'
import { EDIT_USER_ACTION } from './userConstants'
import * as actions from './userActions'
import * as api from './dataService'

const SUCCESS_STATUS_HEADER = 200

function * updateUserDetails(action) {
	yield put(actions.showLoadingIcon())
	const response = yield call(api.updateUserDetails, action.payload)
	if (response.status === SUCCESS_STATUS_HEADER) {
		yield put(actions.updateUserDetails(action.payload))
		yield put(actions.hideLoadingIcon())
	}
}

function* userSagas() {
	yield takeLatest(EDIT_USER_ACTION, updateUserDetails);
  }

export default userSagas