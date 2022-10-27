import React from 'react'
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../Authprobider/Authprobider';


function Profile() {
     const {user} = useContext(AuthContext)
  return (
    <div className='vh-100 w-50 mx-auto mt-5'>
              <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control defaultValue={user?.email} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control defaultValue={user?.displayName} type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control defaultValue={user?.photoURL} type="text" placeholder="Photo URL" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Profile