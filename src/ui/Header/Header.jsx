import React from 'react'
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

let Header = (props) => {
    return <div>
        <div className={styles.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png' />

            <div className={styles.loginBlock}>
                {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
            </div>
        </div>
    </div>
}

export default Header;