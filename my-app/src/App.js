import React from "react";
import User from "./Components /User ";
import Follower from "./Components /Follower";
import "./App.css";
//What Do I Want To Display in the App Ie Avatar url , Followers, Following,Name ??

//figure out what i need to do to render to dom
// Style with React Boot Strap
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Lambda Github</h1>
        <User />
        <Follower />
      </div>
    );
  }
}

export default App;
