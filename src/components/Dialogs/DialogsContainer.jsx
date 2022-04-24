import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  newMessageBodyActionCreator,
  sendMessageActionCreator,
} from "../../redux/store";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let onNewMessageChange = (body) => {
    props.store.dispatch(newMessageBodyActionCreator(body));
  };
  let onSendMessageClick = (body) => {
    debugger;
    props.store.dispatch(sendMessageActionCreator(body));
  };
  return (
    <Dialogs
      onSendMessageClick={onSendMessageClick}
      onNewMessageChange={onNewMessageChange}
      newMassageBody={state.dialogsPage.newMessageBody}
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
    />
  );
};
export default DialogsContainer;
