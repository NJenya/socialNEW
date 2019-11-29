import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'SOCIALNETWORK/PROFILE/ADD_POST'
const UPDATE_NEW_POST_TEXT = 'SOCIALNETWORK/PROFILE/UPDATE_NEW_POST_TEXT'
const SET_POSTS = 'SOCIALNETWORK/PROFILE/SET_POSTS'
const SET_USER_PROFILE = 'SOCIALNETWORK/PROFILE/SET_USER_PROFILE'
const SET_STATUS = 'SOCIALNETWORK/PROFILE/SET_STATUS'

let initialState = {
	posts: [
		{ id: 1, post: "Hi, how are you?", likesCount: 5 },
		{ id: 2, post: "Second post:)", likesCount: 12 },
		{ id: 3, post: "BlaBla", likesCount: 13 }
	],
	newPostText: 'Timurka',
	profile: null,
	status: 'enter your status!!!!!!'
}

let profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 4,
				post: state.newPostText,
				likesCount: 0
			}
			return {
				...state, posts: [...state.posts, newPost], newPostText: ''
			}
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state, newPostText: action.newPostText
			}
		}
		case SET_POSTS: {
			return {
				...state, posts: action.posts
			}
		}
		case SET_USER_PROFILE: {
			return {
				...state, profile: action.profile
			}
		}
		case SET_STATUS: {
			return {
				...state, status: action.status
			}
		}
		default: {return state}
	}
}

export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText})
export const setPostsAC = (posts) => ({type: SET_POSTS, posts})
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const setUserProfile = (userId) => {
	return (dispatch) => {
		userAPI.getProfile(userId).then(res => {
			dispatch(setUserProfileSuccess(res.data))
		})
	}
}

export const getStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId).then(res => {
			dispatch(setStatus(res.data))
		})
	}
}

export const updateStatus = (status) => (dispatch) => {
		profileAPI.updateStatus(status)
			.then(res => {
				if(res.data.resultCode === 0) {
					dispatch(setStatus(status))
				}
		})
}

export default profileReducer
