import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import SignIn from './Components/SignIn.js'
class App extends Component {
  state = {user: null}
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
    this.fbApp = firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(this.onSignInChange);
  }
  onSignInChange = (user) =>{
    if (user) {

      this.setState({user: user})


    } else {
      this.setState({user: null})
    }
  }
  signOut = () => {
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}, function(error) {
  // An error happened.
});
  }
  checkSignin = () =>{

    if(this.state.user){
      return (<h1 onClick={this.signOut}>Welcome {this.state.user.email} (Click to Sign Out)</h1>)
    }else{
      return(<SignIn/>)
    }
  }

  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">GT Mobile</a>
        </nav>

        <div className="container">
          {this.checkSignin()}
        </div>
      </div>
    );
  }
}

export default App;
