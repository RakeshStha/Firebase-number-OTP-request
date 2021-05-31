


import React, { Component } from 'react'
import './App.css';
import firebase from './firebase';

export class App extends Component {
  handleClick=()=>{
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    let number = '+9779849497787';
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function(e) {
      let code = prompt('enter the otp', '');
      if(code == null) return;
      e.confirm(code).then(function(result){
        console.log(result.user, 'user');
        document.querySelector('label').textContent = result.user.phoneNumber + "Number verified";
      }).catch((error)=>{
        console.log(error)
      })
    })
  }
  render() {
    
    return (
   
      <div className="App">
          <label></label>
          <div id="recaptcha"></div>
          <button onClick = {this.handleClick}>Click here</button>
    </div>
   
    )
  }
}

export default App

