import React from 'react'

const MyMessage = ({message}) => {
    {/*checks if message is text or an image*/}
    if(message.attachments && message.attachments.length>0){
        return(
            <img 
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{float:'right'}}
            />            
        )
    }
    return (
        <div className="message" style={{float: 'right', marginRight: '20px', color: 'white', backgroundColor: '#3B2A50'}}> 
            {message.text}
        </div>
    )
}

export default MyMessage
