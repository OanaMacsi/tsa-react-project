import { SHOW_LOADING_ICON, HIDE_LOADING_ICON, UPDATE_USER_DETAILS, PATCH_USER_ACTION } from './userConstants'

const initialState = {
	userData: {
		firstName: 'Test2',
		lastName: 'Academy',
		email: 'academy@thinslices.com',
		phone: '074123456'
	},
	waitingServer: false
}

const postReducer = (state = initialState, action = {}) => {
	switch(action.type) {
		case UPDATE_USER_DETAILS:
			return {
				...state,
				userData: {
					...action.payload
				}
			};

		case PATCH_USER_ACTION:
			return {
				...state,
				userData: {
					...state.userData,
					...action.payload
				}
			}
		case SHOW_LOADING_ICON:
			return {
				...state,
				waitingServer: true
			}
		case HIDE_LOADING_ICON:
			return {
				...state,
				waitingServer: false
			}
		default:
			return state;
	}
  }

  export default postReducer;