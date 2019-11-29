import {userAPI} from "../api/api";

const FOLLOW = 'SOCIALNETWORK/FINDUSERS/FOLLOW'
const UNFOLLOW = 'SOCIALNETWORK/FINDUSERS/UNFOLLOW'
const SET_USERS = 'SOCIALNETWORK/FINDUSERS/SET_USERS'
const SET_CURRENT_PAGE = 'SOCIALNETWORK/FINDUSERS/SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SOCIALNETWORK/FINDUSERS/SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'SOCIALNETWORK/FINDUSERS/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'SOCIALNETWORK/FINDUSERS/TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
	users: [
		{
			id: 1,
			name: 'Timurka',
			photos: {
				small: '',
				large: ''
			},
			followed: false,
			status: 'Superboy',
			location: {
				city: 'Vinnytsia',
				country: 'Ukraine'
			}
		},
		{
			id: 2,
			name: 'Olya',
			photos: 'https://www.pngkey.com/png/detail/201-2019759_iron-man-black-and-white-wallpaper-tony-stark.png',
			followed: false,
			status: 'Supergirl',
			location: {
				city: 'Vinnytsia',
				country: 'Ukraine'
			}
		},
		{
			id: 3,
			name: 'Denchik',
			photos: 'https://www.pngkey.com/png/detail/201-2019759_iron-man-black-and-white-wallpaper-tony-stark.png',
			followed: false,
			status: 'Stomat',
			location: {
				city: 'Kiev',
				country: 'Ukraine'
			}
		},
		{
			id: 4,
			name: 'Yura',
			photos: 'https://www.pngkey.com/png/detail/201-2019759_iron-man-black-and-white-wallpaper-tony-stark.png',
			followed: false,
			status: 'Estonec',
			location: {
				city: 'Volhe',
				country: 'Estonia'
			}
		}
	],
	currentPage: 1,
	totalCount: 0,
	pageSize: 10,
	isFetching: false,
	followingInProgress: []
}

let findUsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: true}
					}
					return u
				})
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: false}
					}
					return u
				})
			}
		}
		case SET_USERS: {
			return {...state, users: action.users}
		}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}
		case SET_TOTAL_USER_COUNT: {
			return {...state, totalCount: action.totalCount}
		}
		case TOGGLE_IS_FETCHING: {
			return {...state, isFetching: action.isFetching}
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.followingInProgress
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			}
		}
		default: {
			return state
		}
	}
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUserCount = (totalCount) => ({type: SET_TOTAL_USER_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (followingInProgress, userId) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	followingInProgress,
	userId
})

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true))
		userAPI.getUsers(currentPage, pageSize).then(data => {
			dispatch(toggleIsFetching(false))
			dispatch(setUsers(data.items))
			dispatch(setTotalUserCount(data.totalCount))
		})
	}
}

export const follow = (userId) => {
	return (dispatch) => {
		dispatch(toggleIsFollowingProgress(true, userId))
		userAPI.followUser(userId)
			.then(res => {
				if (res.data.resultCode === 0) {
					dispatch(followSuccess(userId))
				}
				dispatch(toggleIsFollowingProgress(false, userId))
			})
	}
}

export const unfollow = (userId) => {
	return (dispatch) => {
		dispatch(toggleIsFollowingProgress(true, userId))

		userAPI.unfollowUser(userId)
			.then(res => {
				if (res.data.resultCode === 0) {
					dispatch(unfollowSuccess(userId))
				}
				dispatch(toggleIsFollowingProgress(false, userId))
			})
	}
}


export default findUsersReducer
