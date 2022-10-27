import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react'
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../Authprobider/Authprobider';

function Login() {

     const {loginProvider} = useContext(AuthContext);

     const googleProvider = new GoogleAuthProvider()

     const handleGoogleSignIn = () =>{
          loginProvider(googleProvider)
          .then(result =>{
               const user = result.user;
               console.log(user)       
          })
          .catch(error => console.error(error))
     }

  return (
    <div>
     <Form className='w-50 m-auto mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
        <div>
          <div className='mt-2'>             
          </div>
           <Button onClick={handleGoogleSignIn} variant="outline-secondary">Sign In with Google</Button>
          <div className='mt-1'>
           <Button variant="outline-secondary">Sign In With GitHub</Button>
          </div>
        </div>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Login