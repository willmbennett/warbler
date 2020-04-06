import React from "react";
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside";

const MessageTimeline = props => {
    return (
        <div className="row">
            <UserAside 
                profileImageUrl={props.profileImageUrl}
                username={props.username}
                width="200"
                height="200"
            />
            <MessageList />
        </div>
    );
};

export default MessageTimeline;