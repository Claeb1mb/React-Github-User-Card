import React from "react";
import axios from "axios";
import UserData from "./UserData";
class FollowerData extends React.Component {
  constructor() {
    super();
    this.state = {
      FollowersData: [],
      followersProfile: [],
    };
  }
  componentDidMount() {
    axios.get("https://api.github.com/users/Claeb1mb/followers").then((res) => {
      console.log("followers load", res.data);
      this.setState({ FollowerData: res.data });
    });

    this.state.followersProfile.map((follower) => {
      axios
        .get(`https://api.github.com/users/${follower.login}`)
        .then((res) => {
          console.log("Should be follower Profiles", res);
          this.setState({
            followersProfile: [...this.state.followersProfile, res],
          });
        });
    });
  }

  render() {
    return (
      <div className="follow-card">
        {this.state.followersProfile.map((profile) => {
          return <UserData user={profile} />;
        })}
      </div>
    );
  }
}

export default FollowerData;
