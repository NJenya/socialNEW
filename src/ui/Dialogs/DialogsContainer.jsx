import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessageAC, setMessagesAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextAC(text))
        },
        setMessages: (messages) => {
            dispatch(setMessagesAC(messages))
        }
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)