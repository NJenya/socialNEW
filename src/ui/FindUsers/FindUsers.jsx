import React from 'react'
import dialogsPhoto from '../../assets/images/AVA_logo_black_AVA-only.png'
import styles from './FindUsers.module.css'
import {NavLink} from "react-router-dom";

let FindUsers = (props) => {

	let countPage = Math.ceil(props.totalCount / props.pageSize)
	let pages = [];
	for (let i = 1; i <= countPage; i++) {
		pages.push(i)
	}


	return <div>
		<div>
			{pages.map(p => {
				return <span
					className={props.currentPage === p && styles.selectPage}
					onClick={(e) => props.onPageChanged(p)}> {p} </span>
			})}
		</div>
		<div>
			{
				props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
							<NavLink to={'/profile/' + u.id}>
								<img className={styles.userImg} src={u.photos.small || dialogsPhoto}/>
                            </NavLink>
                        </div>
						<div>
                            {u.followed
								? <button disabled={props.followingInProgress
									.some(id => id === u.id)}
										  onClick={() => { props.unfollow(u.id)}}>
									Unfollow</button>

								: <button disabled={props.followingInProgress
									.some(id => id === u.id)}
										  onClick={() => { props.follow(u.id)}}>
									Follow</button>}
                        </div>
                    </span>
					<span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>u.location.city</div>
                        <div>u.location.country</div>
                    </span>
				</div>)
			}
		</div>
	</div>
}

export default FindUsers;