import { EDIT_USER_ACTION, PATCH_USER_ACTION } from './userConstants'

const initialState = {
	firstName: 'Test2',
	lastName: 'Academy',
	email: 'academy@thinslices.com',
	phone: '074123456'
}

const postReducer = (state = initialState, action) => {
	switch(action.type) {
	  case EDIT_USER_ACTION:
		return {
			...action.payload
		};

	  case PATCH_USER_ACTION:
		return {
			...state,
			...action.payload
		}
	  default:
		return state;
	}
  }

  export default postReducer;