
import React, { Component } from 'react'
import './App.css';
import firebase from './firebase';
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
        fname:"",
        phone:"",
        email:"",
        password:"", 
        }
    }

    handleFullname = (e) => {
      this.setState({
          fname:e.target.value
      })
    }

    handleEmail = (e) => {
      this.setState({
          email:e.target.value
      })
    }

    handlePhone = (e) => {
      this.setState({
          phone:e.target.value
      })
    }

    handlePassword = (e) => {
      this.setState({
          password:e.target.value
      })
    }





  handleClick=()=>{
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    // let number = '+9779849497787'
    // console.log(typeof(number));
    let number ='+977' + String(this.state.phone);
    // console.log(number);
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
                            <Input type="text" 
                            name="fname" 
                            id="Name" 
                            placeholder="Full Name" 
                            value={this.state.fname}
                            onChange={this.handleFullname}
                            />

                        </FormGroup>
                        <FormGroup>
                            <Label for="Email" hidden>Email</Label>
                            <Input type="email" 
                            name="email" 
                            id="Email" 
                            placeholder="Email" 
                            value={this.state.email}
                            onChange={this.handleEmail}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Phone" hidden>Phone</Label>
                            <Input type="number" 
                            name="phone" 
                            id="phone" 
                            placeholder="+977-9812345678" 
                            max="10"
                            value={this.state.phonee}
                            onChange={this.handlePhone}
                            />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label for="Password" hidden>Password</Label>
                            <Input type="password" 
                            name="password" 
                            id="Password" 
                            placeholder="Password" 
                            value={this.state.password}
                            onChange={this.handlePassword}
                            />
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

