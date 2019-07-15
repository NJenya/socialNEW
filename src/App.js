import React from 'react';
import './App.module.css';
import Header from "./ui/Header/Header";
import Navbar from "./ui/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import styles from './App.module.css'
import Friends from "./ui/Friends/Friends";
import Music from "./ui/Music/Music";
import Settings from "./ui/Setings/Settings";
import ProfileContainer from "./ui/Profile/ProfileContainer";
import FindUsersContainer from "./ui/FindUsers/FindUsersContainer";
import DialogsContainer from "./ui/Dialogs/DialogsContainer";
import HeaderContainer from "./ui/Header/HeaderContainer";
import Login from "./ui/Login/Login";

function App() {
	return (
		<div className={styles.appWrapper}>
			<BrowserRouter>
				<HeaderContainer />
				<Navbar />
				<div className={styles.content}>
					<Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
					<Route path='/dialogs' render={() => <DialogsContainer />}/>
					<Route path='/friends' render={() => <Friends />}/>
					<Route path='/music' render={() => <Music />}/>
					<Route path='/settings' render={() => <Settings />}/>
					<Route path='/findusers' render={() => <FindUsersContainer />}/>
					<Route path='/login' render={() => <Login />}/>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
