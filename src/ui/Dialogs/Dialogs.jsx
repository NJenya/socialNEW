import React from 'react'
import styles from './Dialogs.module.css'
import {Redirect} from "react-router-dom";

let Dialogs = (props) => {

    let updateText = (e) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    return <div className={styles.dialogs}>
        <div>
            <span>
                {
                    props.dialogs.map(d => <div>{d.name}</div>)
                }
            </span>
            <br/>
            <span>
                {
                    props.messages.map(m => <div>{m.message}</div>)
                }
            </span>
            <br/>
            <textarea onChange={updateText} value={props.newMessageText}/>
            <button onClick={props.addMessage}>Send Message</button>
        </div>
    </div>
}

export default Dialogs;