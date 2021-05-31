import React, { Component } from 'react';
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../Signup/signup.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Signup extends Component {
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
                        <Button className="btns">Submit</Button>
                        </Form>
                    </Card>
            </div>
           
        )
    }
}
