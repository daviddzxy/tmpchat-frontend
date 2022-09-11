import React from "react";

interface Props {
    author: string,
    content: string
}

const Message = ({author, content}: Props) => {
    return (
        <div>
            {author}: {content}
        </div>
    );
};

export default Message;