import React, { Component } from 'react';
import EditUserProfile from './User/EditUserProfile'
import ShowUserProfile from './User/ShowUserProfile'
import userReducer from './User/userReducer'
import userSagas from './User/userSagas'
import './App.css';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(userReducer,
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(userSagas)

class App extends Component {
  render() {
	return   <Provider store={store}>
		<div className='appContainer'>
			<ShowUserProfile />
			<EditUserProfile />
		</div>
	</Provider>
  }
}

export default App;
