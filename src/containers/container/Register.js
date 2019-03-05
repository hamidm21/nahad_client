import React, { Component } from 'react';
import { connect } from "react-redux";
import { RegisterView } from '../../views/RegisterView';
import { RegisterUser } from '../../actions/Auth/actions';
import { handleChange } from '../../actions/Auth/actionCreators';


class Register extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.props.handleChange(e.target.id, e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.RegisterUser(this.props.email, this.props.username, this.props.password)
  }

    render() {
        return (
           <RegisterView 
           handleChange={this.handleChange}
           handleSubmit={this.handleSubmit}
           username={this.props.username}
           email={this.props.email}
           password={this.props.password}
           />
        );
      }
}

const mapStateToProps = state => {
  return {
      username: state.auth.username,
      email: state.auth.email,
      password: state.auth.Rpassword,
  };
};


const mapDispatchToProps = dispatch => {
  return {
      handleChange: (id, value) => {
          dispatch(handleChange(id, value))
        },
      RegisterUser: (email, username, password) => {
        dispatch(RegisterUser(email, username, password))
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
