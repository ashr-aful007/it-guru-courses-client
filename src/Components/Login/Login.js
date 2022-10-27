import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authprobider/Authprobider';


function Login() {
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'
     const {loginProvider, signIn} = useContext(AuthContext);

     const googleProvider = new GoogleAuthProvider()

     const handleGoogleSignIn = () =>{
          loginProvider(googleProvider)
          .then(result =>{
               const user = result.user;
               console.log(user)  
               setError('')
               navigate(from, {replace: true})     
          })
          .catch(error =>{ 
            setError(error)
          })
     }
     const handleSubmit = event =>{
       event.preventDefault()
       const form = event.target;
       const email = form.email.value;
       const passowrd = form.passowrd.value;
       signIn(email, passowrd)
       .then(result =>{
        const user = result.user;
        console.log(user)
        form.reset()
       })
       .catch(error => setError(error))
     }




  return (
    <div>
     <Form onSubmit={handleSubmit} className='w-50 m-auto mt-5'>
      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='passowrd' type="password" placeholder="Password" required />
        <div>
          <div className='mt-2'>             
          </div>
           <Button onClick={handleGoogleSignIn} variant="outline-secondary">Sign In with Google</Button>
          <div className='mt-1'>
           <Button variant="outline-secondary">Sign In With GitHub</Button>
          </div>
        </div>
      </Form.Group>
      <div className='text-denger'>
      {error}
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>    
    </Form>
    </div>
  )
}

export default Login