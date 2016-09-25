import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import UserCheck from './Components/UserCheck';
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


  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">GT Mobile</a>
        </nav>

        <div className="container">

          <UserCheck successful={<h1>Cool!</h1>}/>
        </div>
      </div>
    );
  }
}

export default App;
