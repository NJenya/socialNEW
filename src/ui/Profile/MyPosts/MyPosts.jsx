import React from 'react'
import styles from './MyPosts.module.css'

let MyPosts = (props) => {

	let {posts, newPostText} = props;
	let {updateNewPostText, setPosts, addPost} = props;

	let onPostChange = (e) => {
		let text = e.currentTarget.value
		updateNewPostText(text)
	}

	return <div className={styles.content}>
		<div>
			<textarea onChange={onPostChange} value={props.newPostText}/>
			<button onClick={addPost}>Add Post</button>
		</div>
		<div>
			{
				posts.map(p => <div key={p.id}>
					<div>{p.post}</div>
					<span>Likes: {p.likesCount}</span></div>)
			}
		</div>

	</div>
}

export default MyPosts;