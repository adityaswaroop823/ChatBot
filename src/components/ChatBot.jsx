import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import "../App.css";
import useOpenAIChat from "../customhook";

const MainPage = () => {
  const { isLoading, sendMessage } = useOpenAIChat();
  const [input, setInput] = useState("");
  const data = useSelector((state) => state.chatHistory.chatData);

  useEffect(() => {
    scrollToBotChat();
  }, [data]);

  const scrollToBotChat = () => {
    if (data.length > 1) {
      const id = `userChatContainer${data.length - 1}`;
      const bottomElement = document.getElementById(id);
      if (bottomElement) {
        bottomElement.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  };

  const handleMessageSubmit = () => {
    scrollToBotChat();
    sendMessage(input);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleMessageSubmit();
    }
  };

  return (
    <div className="App">
      <div className="headerDiv">
        <p className="headingText">
          ChatBot using OpenAi Api , React and Redux
        </p>
      </div>

      <div className="chat" id="chatscreen">
        {data &&
          data.map((item, index) => {
            return (
              <div
                id={`userChatContainer` + index}
                key={index}
                className={item.isUser ? "user-message" : "bot-message"}
              >
                {item.text}
              </div>
            );
          })}
        {isLoading && (
          <div>
            <p className="loading">Generating answer...</p>
          </div>
        )}
        {data.length > 0 && (
          <div
            className="arrow-icon"
            onClick={() => {
              const chatContainer = document.querySelector(".chat");
              chatContainer.scrollTop = chatContainer.scrollHeight;
            }}
          ></div>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          placeholder={"Type here and ask your doubts..."}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress} // Add the event listener
        />
        <button
          onClick={handleMessageSubmit}
          disabled={input.trim() === ""}
          style={{
            backgroundColor: input.trim() === "" ? "grey" : "#1976d1",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MainPage;
