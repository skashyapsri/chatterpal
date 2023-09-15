import React from 'react';
import ChatHeader from '../ChatHeader';
import MessageList from '../MessageList';
import MessageInput from '../MessageInput';
import './style.css';

function ChatApp() {
  return (
    <section className="msger">
      <ChatHeader />
      <MessageList />
      <MessageInput />
    </section>
  );
}

export default ChatApp;
