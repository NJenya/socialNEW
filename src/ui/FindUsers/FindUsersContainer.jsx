import React from 'react'
import {connect} from "react-redux"
import {follow, getUsers, setCurrentPage, toggleIsFollowingProgress, unfollow} from "../../redux/findUsersReducer";
import FindUsers from "./FindUsers"
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class FindUsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);

		// this.props.toggleIsFetching(true)
		// this.props.setCurrentPage(pageNamber)
		// getUsers(pageNamber, this.props.pageSize).then(data => {
		// 		this.props.toggleIsFetching(false)
		// 		this.props.setUsers(data.items)
		// 	})
	}

	// componentDidUpdate(prevProps, prevState, snapshot) {
	//
	// 	if (prevProps.currentPage !== this.props.currentPage) {
	// 		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
	// 			.then(res => {
	// 				this.props.setUsers(res.data.items)
	// 			})
	// 	}
	// }


	render() {
		return <>
			{this.props.isFetching && <Preloader/>}
			<FindUsers {...this.props} onPageChanged={this.onPageChanged}/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.findUsersPage.users,
		pageSize: state.findUsersPage.pageSize,
		totalCount: state.findUsersPage.totalCount,
		currentPage: state.findUsersPage.currentPage,
		isFetching: state.findUsersPage.isFetching,
		followingInProgress: state.findUsersPage.followingInProgress
	}
}

/*let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (currentPage) => {
			dispatch(setCurrentPageAC(currentPage))
		},
		setTotalUserCount: (totalCount) => {
			dispatch(setTotalUserCountAC(totalCount))
		},
		toggleIsFetching: (isFetchin) => {
			dispatch(toggleIsFetchingAC(isFetchin))
		}
	}
}*/

export default compose(
	connect(mapStateToProps, {follow, setCurrentPage, unfollow, toggleIsFollowingProgress, getUsers}),
	withAuthRedirect
)(FindUsersContainer)
