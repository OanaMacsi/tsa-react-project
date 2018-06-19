const initialState = {
	firstName: 'Test2',
	lastName: 'Academy',
	email: 'academy@thinslices.com',
	phone: '074123456'
}

const postReducer = (state = initialState, action) => {
	switch(action.type) {
	  case 'EDIT_USER':
	  	console.log(action.newUserData)
		return {
			...action.newUserData
		};
	  default:
		return state;
	}
  }

  export default postReducer;