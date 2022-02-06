import React from "react";

const Message = ({author, text, id}) => {
    return (
        <div key={id}>
            {author}: {text}
        </div>
    );
}

export default Message;