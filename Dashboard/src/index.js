import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import * as firebase from 'firebase';

const config = {

  apiKey: "AIzaSyA1vGSYU6O0rB3QcMJyUk5vscR-fzCWBVc",
  authDomain: "gtmobile-2758e.firebaseapp.com",
  databaseURL: "https://gtmobile-2758e.firebaseio.com",
  storageBucket: "gtmobile-2758e.appspot.com",
  messagingSenderId: "697096842426"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
