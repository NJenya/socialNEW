import React from 'react'
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import dialogsPhoto from "../../../assets/images/AVA_logo_black_AVA-only.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

let ProfileInfo = (props) => {

	if (!props.profile){
		return <Preloader/>
	}

	return <div className={styles.content}>
		<div>
			<img src={props.profile.photos.large || dialogsPhoto} alt={'ava'} />
			<div>{props.profile.fullName}</div>
			<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
		</div>

	</div>
}

export default ProfileInfo;
