import React from "react";
import Message from "../Message";
import "./style.css";
import { useMessageContext } from "../../redux/MessageContext";
function MessageList() {
    const {messages} = useMessageContext()
	return (
		<main className='msger-chat'>
            {messages.map(m =>   <Message
				sender={m.sender}
				timestamp={m.timestamp}
				message={m.text}
			/>)
}
		</main>
	);
}

export default MessageList;
