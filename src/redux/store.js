import {applyMiddleware, combineReducers, createStore} from "redux"
import profileReducer from "./profileReducer";
import findUsersReducer from "./findUsersReducer";
import dialogsReducer from "./dialogsReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
	profilePage: profileReducer,
	findUsersPage: findUsersReducer,
	dialogsPage: dialogsReducer,
	auth: authReducer,
	form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store;
