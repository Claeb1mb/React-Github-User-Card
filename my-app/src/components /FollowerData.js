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
    console.log("CDM Running");
    axios
      .get("https://api.github.com/users/Claeb1mb/followers")
      .then((res) => {
        console.log(res);
        this.setState({ FollowerData: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log("FollowerData Render");
    console.log(this.state);
    return (
      <div>
        <h1>Followers</h1>
        <div className="follow-card">
          {this.state.FollowersData.map((data) => (
            <img
              width="200"
              src={data.avatar_url}
              key={data.avatar_url}
              alt=""
            />
          ))}
        </div>
      </div>
    );
  }
}

export default FollowerData;
