import React, { Component } from 'react';
import logo from '../logo.svg';

import Firebase from 'firebase';
class SignIn extends Component {

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
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-default">Login</button>
              </form>

          </div>
        </div>

      </div>
    );
  }
}

export default SignIn;
