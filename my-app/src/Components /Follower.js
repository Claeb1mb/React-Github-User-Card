// In this component set up state for follower ie this. state = followers:[]
//set up a component did mount to my followers
// render the state like user component
//map through my followers and set up the card

import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class Follower extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/Claeb1mb/followers")
      .then((res) => res.json())
      .then((data) => this.setState({ followers: data }))
      .catch((err) => console.log(err, "CDM Error"));
  }
  render() {
    console.log("Render Followers");
    console.log(this.state);
    return (
      <div>
        <h1>Followers</h1>
        {this.state.followers.map((item) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.avatar_url} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.login}
                </Card.Subtitle>
                <Card.Text>{item.bio}</Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>followers: {item.followers}</ListGroupItem>
                  <ListGroupItem>
                    following: {item.following}
                  </ListGroupItem>{" "}
                  <ListGroupItem>location: {item.location}</ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default Follower;
