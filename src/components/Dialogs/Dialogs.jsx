import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"
import {newMessageBodyCreator, sendMessageCreator} from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessagesBody = state.newMessageBody;


    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(newMessageBodyCreator(body))

    }
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }


    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>

                {dialogsElements}
            </div>
            <div className={c.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessagesBody} onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Add your wet message</button>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Dialogs;