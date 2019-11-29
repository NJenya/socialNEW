import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "1e7b9ebc-83ad-4a2a-99a5-78f7dc702895"
	}
})

export const userAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return (
			instance.get(`users?page=${currentPage}&count=${pageSize}`,)
				.then(res => res.data))
	},
	getProfile (userId) {
		console.warn('Obsolete method. Please use profileAPI object')
		return (
			profileAPI.getProfile(userId)
		)
	},
	unfollowUser (userId) {
		return (
			instance.delete(`follow/${userId}`)
		)
	},
	followUser (userId) {
		return (
			instance.post(`follow/${userId}`)
		)
	}
}

export const profileAPI = {
	getProfile (userId) {
		return (
			instance.get(`profile/` + userId)
		)
	},
	getStatus (userId) {
		return (
			instance.get(`profile/status/` + userId)
		)
	},
	updateStatus (status) {
		return instance.put('profile/status/' + {status})
	}
}

export const authAPI = {
	me () {
		return (
			instance.get('auth/me')
		)
	},
}
