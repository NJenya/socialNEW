import React from 'react'
import styles from './ProfileInfo.module.css'
import profileImage from '../../../assets/images/profileImage.jpg'
import Preloader from "../../common/Preloader/Preloader";

let ProfileInfo = (props) => {

	if (!props.profile){
		return <Preloader/>
	}

	return <div className={styles.content}>
		{/*<img src={profileImage}/>*/}
		<div>
			<img src={props.profile.photos.large} />
			<div>{props.profile.fullName}</div>
			Ava + Description
		</div>

	</div>
}

export default ProfileInfo;