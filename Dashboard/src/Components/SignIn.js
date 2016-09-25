import React, { Component } from 'react';
import logo from '../logo.svg';

import firebase from 'firebase';
class SignIn extends Component {

  state = {
    email:"",
    password: ""
  }

  constructor(props){
    super(props);

  }
  onLogin = () => {
    var email = this.state.email;
    var password = this.state.password;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
  }


  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }



  render() {

    return (
      <div className="SignIn row">
        <div className="panel panel-default col-23">
          <div className="panel-heading">Panel heading without title</div>
          <div className="panel-body">
            <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password" />
                </div>

                <button type="button" className="btn btn-default" onClick={this.onLogin}>Login</button>
              </form>

          </div>
        </div>

      </div>
    );
  }
}

export default SignIn;
