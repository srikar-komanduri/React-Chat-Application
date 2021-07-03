import React from 'react'

const TheirMessage = ({lastMessage,message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.userName!==message.sender.userName;
    return (
        <div className="messsage-row">
            {
                isFirstMessageByUser && (
                    <div
                        className="message-avatar"
                        style={{backgroundImage:`url(${message?.sender?.avatar})`}}
                    />
                )                
            }
            {
                message?.attachments?.length>0 
                ?(
                    <img 
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{margin:isFirstMessageByUser?'4px':'48px'}}
                    />            
                )
                :(
                    <div className="message" style={{float: 'left', backgroundColor: '#CABCDC' ,margin:isFirstMessageByUser?'4px':'48px'}}> 
                        {message.text}
                    </div>
                )
            }
        </div>
    )
}

export default TheirMessage
