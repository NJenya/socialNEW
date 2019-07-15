const ADD_MESSAGE = 'SOCIALNETWORK/PROFILE/ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'SOCIALNETWORK/PROFILE/UPDATE_NEW_MESSAGE_TEXT'
const SET_MESSAGE = 'SOCIALNETWORK/PROFILE/SET_POSTS'

let initialState = {
	dialogs: [
		{id: 1, name: 'Timurka', img: null},
		{id: 2, name: 'Olya', img: null},
		{id: 3, name: 'Slava', img: null},
		{id: 4, name: 'Yura', img: null}
		],
	messages: [
		{ id: 1, message: "Hi, how are you?"},
		{ id: 2, message: "Where are you"},
		{ id: 3, message: "jhafdkjhdf"},
		{ id: 4, message: "gfdgsnj"},
	],
	newMessageText: 'Timurka',
	selectDialogs: null
}

let dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let newMessage = {
				id: 5,
				message: state.newMessageText
			}
			return {
				...state, messages: [...state.messages, newMessage], newMessageText: ''
			}
		}
		case UPDATE_NEW_MESSAGE_TEXT: {
			return {
				...state, newMessageText: action.newMessageText
			}
		}
		case SET_MESSAGE: {
			return {
				...state, posts: action.posts
			}
		}
		default: {return state}

	}
}

export const addMessageAC = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextAC = (newMessageText) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText})
export const setMessagesAC = (posts) => ({type: SET_MESSAGE, posts})

export default dialogsReducer