import React, { createContext, useContext, useState } from "react";

const MessageContext = createContext();

export const useMessageContext = () => {
	return useContext(MessageContext);
};

export const MessageProvider = ({ children }) => {
	const [messages, setMessages] = useState([
		{
			text: "Hi, welcome to ChatterPal! Go ahead and send me a message. 😄",
			sender: "bot",
			timestamp: new Date(),
		}
	]);

	const addMessage = (message) => {
		setMessages(msgs => [...msgs, message]);
	};

	return (
		<MessageContext.Provider value={{ messages, addMessage }}>
			{children}
		</MessageContext.Provider>
	);
};
