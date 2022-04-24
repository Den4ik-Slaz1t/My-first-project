import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  debugger;
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} img={d.img} />
  ));
  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessagesBody = props.newMessageBody;

  let onNewMessageChangeAction = (e) => {
    let body = e.target.value;
    props.onNewMessageChange(body);
  };
  let onSendMessageClickAction = (e) => {
    let body = props.onSendMessageClick(body);
  };

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItem}>{dialogsElements}</div>
      <div className={c.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessagesBody}
              onChange={onNewMessageChangeAction}
              placeholder={"Enter your message"}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClickAction}>
              Add your wet message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
