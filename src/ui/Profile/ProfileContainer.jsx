import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, setUserProfile, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component{

	refreshProfile(){
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 1125
		}
		this.props.setUserProfile(userId)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId !== prevProps.match.params.userId)
		this.refreshProfile()
	}

	render () {
		return (
			<Profile {...this.props}
							 profile={this.props.profile}
							 status={this.props.status}
							 updateStatus={this.props.updateStatus}
			/>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status
})

export default compose(
	connect(mapStateToProps, {setUserProfile, getStatus, updateStatus}),
	withRouter
)(ProfileContainer)
