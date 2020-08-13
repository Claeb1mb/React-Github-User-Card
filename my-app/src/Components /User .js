import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

// Build out the user info with the data i get back this.state.user . whatever i get back

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/Claeb1mb")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }))
      .catch((err) => console.log(err, "CDM Error"));
  }
  render() {
    console.log("Render");
    console.log(this.state);
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.state.users.avatar_url} />
          <Card.Body>
            <Card.Title>{this.state.users.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {this.state.users.login}
            </Card.Subtitle>
            <Card.Text>{this.state.users.bio}</Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                followers: {this.state.users.followers}
              </ListGroupItem>
              <ListGroupItem>
                following: {this.state.users.following}
              </ListGroupItem>{" "}
              <ListGroupItem>
                location: {this.state.users.location}
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default User;
