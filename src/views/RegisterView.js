import React, { Component } from 'react';
import { RegisterForm } from '../components/Form';

export class RegisterView extends Component {
    render() {
        return(
            <RegisterForm 
            handleChange={this.props.handleChange}
            handleSubmit={this.props.handleSubmit}
            username={this.props.username}
            email={this.props.email}
            password={this.props.password}
            />
        )
    }
}