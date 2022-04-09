import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetail extends Component {
  render() {
    if (!this.props.userDetail) return <div>Select a User</div>;

    return (
      <div>
        name: {this.props.userDetail.name}
        email: {this.props.userDetail.email}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userDetail: state.userDetail };
};

export default connect(mapStateToProps)(UserDetail);
