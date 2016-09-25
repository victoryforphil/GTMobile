import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import UserCheck from './Components/UserCheck';
import SignIn from "./Components/SignIn.js";
class App extends Component {
  state = {user: null}
  constructor(){
    super();
    this.connectToFirebase();
  }
  connectToFirebase(){
    var config = {
        apiKey: "AIzaSyA1vGSYU6O0rB3QcMJyUk5vscR-fzCWBVc",
        authDomain: "gtmobile-2758e.firebaseapp.com",
        databaseURL: "https://gtmobile-2758e.firebaseio.com",
        storageBucket: "gtmobile-2758e.appspot.com",
        messagingSenderId: "697096842426"
    };
    this.fbApp = firebase.initializeApp(config);

  }

  signOut = () => {
      firebase.auth().signOut().then(function() {
          // Sign-out successful.
      }, function(error) {
          // An error happened.
      });
  }
  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">GT Mobile</a>
          <UserCheck
            successful={<button type="button" className="btn btn-default navbar-btn" onClick={this.signOut}>Sign Out </button> }
            failed=""
          />

        </nav>

        <div className="container">

          <UserCheck
            successful={<h1>Welcome</h1>}
            failed={<SignIn/>}
          />
        </div>
      </div>
    );
  }
}

export default App;
