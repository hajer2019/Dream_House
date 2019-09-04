import React from "react";
import { connect } from "react-redux";

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        alert("require auth");
        this.props.history.push("/login");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuth) {
        this.context.router.push("/");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      isAuth: state.userReducer.isAuth
    };
  }

  return connect(mapStateToProps)(Authenticate);
}
