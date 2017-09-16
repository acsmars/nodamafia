import React from "react";
import ReactDOM from "react-dom";
import socket from "./comms";

import {Chat} from "./chat"
import {PlayerList} from "./playerList"

class App extends React.Component {
    render(props) {
        return (
            <div>
                <Chat message="message2"/>
                <PlayerList/>
            </div>
        )
    };
}

const app = document.getElementById("app");

ReactDOM.render(<App/>, app);