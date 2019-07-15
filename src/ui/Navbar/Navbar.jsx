import React from 'react'
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

let Navbar = () => {
	return <nav className={styles.nav}>
		<div>
			<NavLink to='/profile'>Profile</NavLink>
		</div>
		<div>
			<NavLink to='/dialogs'>Dialogs</NavLink>
		</div>
		<div>
			<NavLink to='/friends'>Friends</NavLink>
		</div>
		<div>
			<NavLink to='/music'>Music</NavLink>
		</div>
		<div>
			<NavLink to='/settings'>Settings</NavLink>
		</div>
		<div>
			<NavLink to='/findusers'>FindUsers</NavLink>
		</div>
		<div>
			<NavLink to='/login'>Login</NavLink>
		</div>
	</nav>
}

export default Navbar;