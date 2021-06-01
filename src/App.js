
import React, { Component } from 'react'
import './App.css';
import firebase from './firebase';
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
   
      <div className="d-flex justify-content-center">
                 <Card className="card ">
                    <Form inline>
                        <h1 className="text-center">Signup</h1>
                        <FormGroup>
                            <Label for="name" hidden>Full Name</Label>
                            <Input type="text" name="name" id="Name" placeholder="Full Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Email" hidden>Email</Label>
                            <Input type="email" name="email" id="Email" placeholder="Email" />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label for="Password" hidden>Password</Label>
                            <Input type="password" name="password" id="Password" placeholder="Password" />
                        </FormGroup>
                        {' '}
                        <div id="recaptcha"></div>
                        <Button className="btns" onClick = {this.handleClick}>Submit</Button>
                        </Form>
                    </Card>
            </div>
   
    )
  }
}

export default App

