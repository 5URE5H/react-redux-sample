import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserDetail } from "../actions";

class UserList extends Component {
  render() {
    console.log(this.props);
    const renderUsers = this.props.users.map((user) => {
      return (
        <div>
          <div key={user.id} onClick={() => this.props.getUserDetail(user)}>
            {user.name}
          </div>
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

export default connect(mapStateToProps, { getUserDetail })(UserList);
