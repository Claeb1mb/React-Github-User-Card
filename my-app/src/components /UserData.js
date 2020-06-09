import React from "react";
import { Card, Button } from "react-bootstrap";

class UserData extends React.Component {
  constructor() {
    super();
    this.state = {
      usersData: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/Claeb1mb")
      .then((res) => res.json())
      .then((data) => this.setState({ UsersData: data }))
      .catch((errors) => console.log(errors));
  }

  render() {
    console.log("UsersData Render");
    console.log(this.state);
    return (
      <div>
        <h1>Users</h1>
        <div className="my-card">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default UserData;
