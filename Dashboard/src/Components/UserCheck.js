import React, {
    Component
} from 'react';
import logo from '../logo.svg';

import firebase from 'firebase';
import SignIn from "./SignIn.js";
class UserCheck extends Component {

    state = {
        user: null
    }

    constructor(props) {
        super(props);

    }
    componentDidMount(){
      firebase.auth().onAuthStateChanged(this.onSignInChange);
    }
    onSignInChange = (user) => {
        if (user) {

            this.setState({
                user: user
            })

        } else {
            this.setState({
                user: null
            })
        }
    }

    checkSignin = () => {
        if (this.state.user != null) {
            return (this.props.successful)
        } else {
            return ( < SignIn / > )
        }
    }


    render() {

        return (<div>{this.checkSignin()}</div>);
    }
}

export default UserCheck;
