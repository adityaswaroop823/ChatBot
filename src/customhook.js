import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addInput, addMessage } from "./redux/actions";
import { sendMessageToOpenAI } from "./axios";

const useOpenAIChat = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const sendMessage = async (input) => {
    if (input.trim() === "") {
      return; // Return early if the input is empty or contains only whitespace
    }

    setIsLoading(true);

    dispatch(addInput(input));

    const response = await sendMessageToOpenAI(input);
    dispatch(addMessage(response));

    setIsLoading(false);
  };

  return { isLoading, sendMessage };
};

export default useOpenAIChat;
