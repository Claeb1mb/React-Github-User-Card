import React from "react";
import axios from "axios";
import User from "./Components /User ";
import "./App.css";
//What Do I Want To Display in the App Ie Avatar url , Followers, Following,Name ??

//figure out what i need to do to render to dom
// Style with React Boot Strap
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/Claeb1mb`)
      .then((res) => console.log(res.data))
      .then((data) => this.setState({ data: data }))
      .catch((err) => console.log(err, "CDM Error"));
  }

  render() {
    return (
      <div>
        <h1>Lambda Github</h1>
        <User />
      </div>
    );
  }
}

export default App;
