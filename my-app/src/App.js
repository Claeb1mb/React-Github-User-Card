import React from "react";
import "./App.css";
import FollowerData from "./components /FollowerData";
import UserData from "./components /UserData";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="myApp">
        <h1>Github User Cards</h1>
        <UserData />
        <FollowerData />
      </div>
    );
  }
}

export default App;
