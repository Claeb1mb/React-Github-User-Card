import React from "react";
import axios from "axios";
class FollowerData extends React.Component {
  constructor() {
    super();
    this.state = {
      FollowersData: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/Claeb1mb/followers")
      .then((res) => res.json())
      .then((data) => this.setState({ followersData: data }))
      .catch((errors) => console.log(errors));
  }

  render() {
    console.log("FollowersData render");
    console.log(this.state);
    return (
      <div>
        <h1>Followers</h1>
        <div className="Follow-Card">
          {this.state.FollowersData.map((following) => {
            return (
              <a href={following.html_url}>
                <img src={following.avatar_url} alt="follow-pic" />
                <p>{following.login}</p>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FollowerData;
