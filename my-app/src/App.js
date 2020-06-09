import React from "react";
import "./App.css";
import axios from "axios";
import FollowerData from "./components /FollowerData";
import UserData from "./components /UserData";

class App extends React.Component {
  render() {
    return (
      <div className="myApp">
        <h1>Github User Cards</h1>
        <FollowerData />
        <UserData />
      </div>
    );
  }
}

export default App;
