import React from "react";

class UserData extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  render() {
    return (
      <div>
        <h1>Users</h1>
      </div>
    );
  }
}

export default UserData;
