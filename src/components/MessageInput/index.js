import React, { useState } from "react";
import "./style.css";
import { useMessageContext } from "../../redux/MessageContext";
import BOT_MSGS from "../../data/BotMessages"


function MessageInput() {
	const [inputText, setInputText] = useState("");
	const { addMessage } = useMessageContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputText.trim() !== "") {
			addMessage({ text: inputText, sender: "Srikrishna", timestamp: new Date() });
			setInputText("");
			// Simulate bot response with a delay
			setTimeout(() => {
				const randomIndex = Math.floor(Math.random() * BOT_MSGS.length);
				const botResponse = BOT_MSGS[randomIndex];
				addMessage({ text: botResponse, sender: "bot", timestamp: new Date() });
			}, 2000); // Adjust the delay as needed
		}
	};

	return (
		<form className='msger-inputarea' onSubmit={handleSubmit}>
			<input
				type='text'
				className='msger-input'
				placeholder='Enter your message...'
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
			/>
			<button type='submit' className='msger-send-btn'>
				Send
			</button>
		</form>
	);
}

export default MessageInput;
