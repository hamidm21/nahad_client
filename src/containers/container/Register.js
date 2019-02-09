import React, { Component } from 'react';
import { connect } from "react-redux";
import { RegisterView } from '../../views/RegisterView';

class Register extends Component {
    render() {
        return (
           <RegisterView />
        );
      }
}

export default Register;