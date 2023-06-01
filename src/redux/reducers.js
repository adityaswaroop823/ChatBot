// redux/reducers.js
import { combineReducers } from "redux";


const initialState = {
    chatData: []
  };
const chatHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        chatData: [...state.chatData, action.payload]
      };

    default:
      return state;
  }
};

const conversationStateReducer = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  chatHistory: chatHistoryReducer,
  conversationState: conversationStateReducer,
});

export default rootReducer;
