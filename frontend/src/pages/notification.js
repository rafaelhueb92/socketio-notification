import React, { Component } from "react";
import "./index.css";
import io from "socket.io-client";

class Feed extends Component {
  async componentDidMount() {
    this.registerToSocket();
  }
  registerToSocket = () => {
    const socket = io("http://localhost:3000");
    socket.on("notification", notification => {
      alert(notification);
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notification
          </a>
        </header>
      </div>
    );
  }
}

export default Feed;
