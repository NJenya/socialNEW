import React from 'react'
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostAC, setPostsAC, updateNewPostTextAC} from "../../../redux/profileReducer";

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (newPostText) => {
			dispatch(updateNewPostTextAC(newPostText))
		},
		setPosts: (posts) => {
			dispatch(setPostsAC(posts))
		},
		addPost: () => {
			dispatch(addPostAC())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)