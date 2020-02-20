import React from "react";
import "./Clock.css"

const URL = "ws://localhost:5678/"

class Clock extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            times: ''
        }
    }

    ws = new WebSocket(URL)

    componentDidMount() {
        this.ws.onopen = () => {
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            this.setState({
                time: evt.data
            })
        }


        this.ws.onclose = () => {
            console.log('disconnected')
            this.setState({
                ws: new WebSocket(URL),
            })
        }
    }

    render() {
        return (
            <p className="Clock">
                {this.state.time}
            </p>
        )
    }
}

export default Clock;
