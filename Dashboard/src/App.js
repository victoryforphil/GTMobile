import React, { Component } from 'react';
import logo from './logo.svg';
import Firebase from 'firebase';
import SignIn from './Components/SignIn.js'
class App extends Component {
  componentDidMount(){
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
    this.fbApp = Firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">GT Mobile</a>
        </nav>

        <div className="container">
          <SignIn/>
        </div>
      </div>
    );
  }
}

export default App;
