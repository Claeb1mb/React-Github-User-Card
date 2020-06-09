import React from "react";
import axios from "axios";
class FollowerData extends React.Component {
  constructor() {
    super();
    this.state = {
      Followers: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount is Running");
    axios
      .get("https://api.github.com/users/Claeb1mb")
      .then((response) => {
        console.log(response);
      })
      .catch((errors) => console.log(errors));
  }

  render() {
    return (
      <div>
        <h1>Followers</h1>
      </div>
    );
  }
}

export default FollowerData;
