import {authAPI, userAPI} from "../api/api";

const SET_USER_DATA = 'SOCIALNETWORK/FINDUSERS/FOLLOW'
const TOGGLE_IS_FETCHING = 'SOCIALNETWORK/FINDUSERS/TOGGLE_IS_FETCHING'

let initialState = {
	userId: null,
	email: null,
	login: null,
	isFetching: false,
	isAuth: false
}

let authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
				isAuth: true
			}
		}

		case TOGGLE_IS_FETCHING: {
			return {...state, isFetching: action.isFetching }
		}
		default: {
			return state
		}
	}
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const authorization = () => {
	return (dispatch) => {
		authAPI.me().then(res => {
			if (res.data.resultCode === 0) {
				let {id, email, login} = res.data.data
				dispatch(setAuthUserData(id, email, login))
			}
		})
	}
}

export default authReducer