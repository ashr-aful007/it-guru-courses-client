import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprobider/Authprobider';

function Register() {
  const {createUser, setUser} = useContext(AuthContext)
  const [error, setError] = useState('');
     const handleSubmit = event =>{
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const photoURL = form.photoURl.value;
          const email = form.email.value;
          const passowrd = form.passowrd.value;
          createUser(email,passowrd)
          .then( result =>{
            const user = result.user;
            setUser(user)
            setError('')
            form.reset()
          })
          .catch( error => setError(error))
     }
  return (
    <div className='vh-100'>
           <Form onSubmit={handleSubmit} className='w-50 m-auto mt-5'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>your name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="photoURl" type="text" placeholder="Photo URL" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='passowrd' type="password" placeholder="Password" required/>
      </Form.Group>
      <p>Already have an account<Link to='/login'>Login</Link></p>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div className='text-denger'>
        {error}
      </div>
    </Form>
    </div>
  )
}

export default Register