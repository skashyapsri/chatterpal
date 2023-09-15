import React from "react";
import "./style.css";
import {formatTimeToHHMM} from "../../utils"

function Message({ sender, timestamp, message }) {
	timestamp = formatTimeToHHMM(timestamp)
	return (
		<div className={`msg ${sender === "bot" ? "left-msg" : "right-msg"}`}>
			<div
				className='msg-img'
				style={{
					backgroundImage: `url(${sender === "bot" ? 'https://i.pravatar.cc/300' : 'https://i.pravatar.cc/301'})`,
				}}
			></div>

			<div className='msg-bubble'>
				<div className='msg-info'>
					<div className='msg-info-name'>{sender === "bot" ? "Pal" : sender}</div>
					<div className='msg-info-time'>{timestamp}</div>
				</div>

				<div className='msg-text'>{message}</div>
			</div>
		</div>
	);
}

export default Message;
