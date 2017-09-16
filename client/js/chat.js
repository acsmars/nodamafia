import React from "react";

export class Chat extends React.Component {
    render() {
        return (
            <div>
                <p>Chat</p> 
                <p>{this.props.message}</p>
            </div>
        )
    };
}