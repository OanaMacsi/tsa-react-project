import { EDIT_USER_ACTION, PATCH_USER_ACTION, UPDATE_USER_DETAILS, SHOW_LOADING_ICON, HIDE_LOADING_ICON } from './userConstants'

export const editUser = newData => ({
		type: EDIT_USER_ACTION,
		payload: newData
})

export const patchUser = newData => ({
	type: PATCH_USER_ACTION,
	payload: newData
})

export const updateUserDetails = userDetails => ({
	type: UPDATE_USER_DETAILS,
	payload: userDetails
})

export const showLoadingIcon = () => ({
	type: SHOW_LOADING_ICON
})

export const hideLoadingIcon = () => ({
	type: HIDE_LOADING_ICON
})