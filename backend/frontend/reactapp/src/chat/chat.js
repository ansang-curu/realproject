// Chat.js
import React, { useState } from "react";
import "./chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "User", text: "안녕하세요!" },
    { id: 2, sender: "Admin", text: "안녕하세요! 어떻게 도와드릴까요?" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "User", text: newMessage },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>채팅방</h2>
      </div>
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${
              message.sender === "User" ? "user" : "admin"
            }`}
          >
            <p className="message-text">{message.text}</p>
            <span className="message-sender">{message.sender}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="메시지를 입력하세요..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>전송</button>
      </div>
    </div>
  );
};

export default Chat;
