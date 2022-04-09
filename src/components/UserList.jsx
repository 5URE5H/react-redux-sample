import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserDetail } from "../actions";

class UserList extends Component {
  render() {
    const renderUsers = this.props.users.map((user) => {
      return (
        <div>
          <div key={user.id}>{user.name}</div>
          <hr />
        </div>
      );
    });

    return <div>{renderUsers}</div>;
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(UserList);
