import React, { Component } from 'react';
import { connect } from "react-redux";
import { LoginView } from '../../views/LoginView';

class Login extends Component {
    render() {
        return (
           <LoginView />
        );
      }
}

export default Login;