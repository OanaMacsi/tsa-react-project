import { EDIT_USER_ACTION, PATCH_USER_ACTION } from './userConstants'

export const editUser = newData => ({
	type: EDIT_USER_ACTION,
	payload: newData
})

export const patchUser = newData => ({
	type: PATCH_USER_ACTION,
	payload: newData
})
