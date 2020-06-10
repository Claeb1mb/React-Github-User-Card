import React from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

class UserData extends React.Component {
  constructor() {
    super();
    this.state = {
      usersData: [],
    };
  }
  componentDidMount() {
    console.log("CDM Running");
    axios
      .get("https://api.github.com/users/Claeb1mb")
      .then((res) => {
        console.log(res);
        this.setState({ usersData: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log("UsersData Render");
    console.log(this.state);
    return (
      <div>
        <h1>Users</h1>
        <div className="my-card">
          <Card style={{ width: "21rem" }}>
            <Card.Img variant="top" src={this.state.usersData.avatar_url} />
            <Card.Title>{this.state.usersData.name}</Card.Title>
            <Card.Body>{this.state.usersData.bio}.</Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default UserData;
