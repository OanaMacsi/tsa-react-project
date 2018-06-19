import React, { Component } from 'react';
import EditUserProfile from './User/EditUserProfile'
import ShowUserProfile from './User/ShowUserProfile'
import userReducer from './User/userReducer'
import './App.css';

import { createStore } from 'redux';

const store = createStore(userReducer)

class App extends Component {
  render() {
	return <div className='appContainer'>
		<ShowUserProfile store={store}/>
		<EditUserProfile store={store} />
	</div>
  }
}

export default App;
