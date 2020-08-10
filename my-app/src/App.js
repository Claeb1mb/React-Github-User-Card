import React from "react";
import axios from "axios";
import User from "./Components /User ";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/Claeb1mb`)
      .then((res) => console.log(res.data))
      .then((data) => this.setState({ data: data }))
      .catch((err) => console.log(err, "CDM Error"));
  }

  render() {
    return <div></div>;
  }
}

export default App;
