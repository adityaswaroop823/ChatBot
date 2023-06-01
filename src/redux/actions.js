// redux/actions.js
export const addMessage = (message) => {
    return { type: "ADD_MESSAGE", payload: {text:message,isUser:false}};
  };
  export const addInput = (input) => {
    return { type: "ADD_MESSAGE", payload: {text:input,isUser:true} };
  };
  
  export const setLoading = (isLoading) => {
    return { type: "SET_LOADING", payload: isLoading };
  };
  