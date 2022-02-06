import React from "react";


const Message = ({author, text}) => {
    return (
        <div>
            {author}: {text}
        </div>
    );
};

export default Message;