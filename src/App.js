import React, { Component } from 'react';
import EditUserProfile from './User/EditUserProfile'
import ShowUserProfile from './User/ShowUserProfile'
import ErrorBox from './Common/ErrorBox'
import userReducer from './User/userReducer'
import userSagas from './User/userSagas'
import './App.css';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import localForage from 'localforage'
import {createBlacklistFilter} from 'redux-persist-transform-filter'


localForage.config({
    driver      : localForage.LOCALSTORAGE, // Force WebSQL; same as using setDriver()
    name        : 'myApp',
    version     : 1.0,
    size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
    storeName   : 'keyvaluepairs'
});

const userFilter = createBlacklistFilter('userData', ['email', 'phone'])

const persistConfig = {
	key: 'root',
	storage: localForage,
	blacklist: ['waitingServer', 'showUserError']
  }

const persistedReducer = persistReducer(persistConfig, userReducer)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(persistedReducer,
	applyMiddleware(sagaMiddleware)
)

let persistor = persistStore(store)

sagaMiddleware.run(userSagas)

class App extends Component {
  render() {
	return   <Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<div className='appContainer'>
				<ErrorBox />
				<ShowUserProfile />
				<EditUserProfile />
			</div>
		</PersistGate>
	</Provider>
  }
}

export default App;
