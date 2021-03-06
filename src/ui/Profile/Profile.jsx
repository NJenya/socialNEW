import React from 'react'
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

let Profile = (props) => {

	return <div className={styles.content}>
		<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
		<MyPostsContainer />

	</div>
}

export default Profile;
