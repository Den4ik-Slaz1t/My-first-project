const NEW_MESSAGE_BODY = "NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messages: [{ id: 1, message: "Say Hi to Victor!" }],
  dialogs: [
    {
      id: 1,
      name: "Victor",
      img: (
        <img
          src="https://i.pinimg.com/474x/59/95/18/5995186a3da28eef8906f5d3878c76c2.jpg"
          alt="🐑"
        />
      ),
    },
    {
      id: 2,
      name: "Adam",
      img: (
        <img
          src="https://i.pinimg.com/474x/59/95/18/5995186a3da28eef8906f5d3878c76c2.jpg"
          alt="🐑"
        />
      ),
    },
    {
      id: 3,
      name: "Vitalij",
      img: (
        <img
          src="https://i.pinimg.com/474x/59/95/18/5995186a3da28eef8906f5d3878c76c2.jpg"
          alt="🐑"
        />
      ),
    },
    {
      id: 4,
      name: "Vov4yk",
      img: (
        <img
          src="https://i.pinimg.com/474x/59/95/18/5995186a3da28eef8906f5d3878c76c2.jpg"
          alt="🐑"
        />
      ),
    },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: state.messages.length + 1, message: body });
      return state;
    // return {
    //   ...state,
    //   messages: [
    //     ...state.messages,
    //     { id: state.messages.length + 1, message: body },
    //   ],
    //   newMessageBody: "",
    // };
    default:
      return state;
  }
};

export default dialogsReducer;
