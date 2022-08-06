import React from "react";


const Message = ({author, content}) => {
    return (
        <div>
            {author}: {content}
        </div>
    );
};

export default Message;