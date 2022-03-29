import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './login-form.css';
import {Link} from 'react-router-dom';

const Registerpage = () => {
    return (
        <Form className='login-form'>
            <h5 className='text-center'>
                Register Page
            </h5>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder="I'm Paimon"></Input>
            </FormGroup>
            <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="paimonuwu@mail.com"></Input>
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="Password" placeholder="Password"></Input>
            </FormGroup>
            <Button color="primary" size="lg" block>Sign Up</Button>
            <div className='text-center pt-3'>Or have an account? Login here</div>
            <Link to="/"><Button className='mt-2 mb-2' color="primary" size="lg" block>Login</Button></Link>
        </Form>
    )
}

export default Registerpage