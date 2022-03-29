import React from 'react'
import './login-form.css';
import { Link } from 'react-router-dom';

import { FacebookLoginButton } from 'react-social-login-buttons';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Loginpage = () => {
  return (
    <Form className='login-form'>
      <h5>
        <span className='text-center'>Paimon Recipe Website Login</span>
      </h5>
      <h2 className='text-center'>
        Welcome
      </h2>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder='paimonuwu@mail.com'></Input>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder='Password'></Input>
      </FormGroup>
      <Button color="primary" size="lg" block>Login</Button>
      <div className='text-center pt-3'>Or continue with your social account</div>
      <FacebookLoginButton className='mt-3 mb-3'/>
      <div className='text-center'>
        <Link to="/Registerpage">Sign up</Link>
        <span className='p-2'>|</span>
        <Link to="#">Forgot Password</Link>
      </div>
    </Form>
  )
}

export default Loginpage