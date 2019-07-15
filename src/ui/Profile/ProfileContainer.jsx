import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 1125
		}
		this.props.setUserProfile(userId)
	}

	render () {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
})

export default compose(
	connect(mapStateToProps, {setUserProfile}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)