import { takeLatest, takeEvery, call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { EDIT_USER_ACTION, SHOW_USER_ERROR } from './userConstants'
import * as actions from './userActions'
import * as api from './dataService'

const SUCCESS_STATUS_HEADER = 200
const BAD_CLIENT_DATA = 400
const SERVER_ERROR = 500

function * updateUserDetails(action) {
	try {
		yield put(actions.showLoadingIcon())
		const response = yield call(api.updateUserDetails, action.payload)
		console.log(response)
		if (response.response) {
			switch (response.response.status) {
				case BAD_CLIENT_DATA:
				case SERVER_ERROR:
					yield put(actions.showUserError())
					yield put(actions.hideLoadingIcon())
					break;
				default:
					break
				}
		} else if (response.status === SUCCESS_STATUS_HEADER){
			yield put(actions.updateUserDetails(action.payload))
			yield put(actions.hideLoadingIcon())
		}
	} catch(err) {
		yield put(actions.hideLoadingIcon())
		yield put(actions.showUserError())
		console.log('saga error:', err)
	}
}

function * toggetUserError() {
	yield call(delay, 2000)
	yield put(actions.hideUserError())
}

function* userSagas() {
	yield takeLatest(EDIT_USER_ACTION, updateUserDetails);
	yield takeEvery(SHOW_USER_ERROR, toggetUserError)

  }

export default userSagas