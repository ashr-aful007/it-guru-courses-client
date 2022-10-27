import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Authprobider/Authprobider';
import { Button } from 'react-bootstrap';


function Header() {
  const {user} = useContext(AuthContext)
  return (
    <Navbar bg="light" expand="lg" className='pb-4'>
      <Container fluid className='mt-2'>
        <Link className='me-5 fw-bold text-decoration-none link-dark fs-5' to='/'>IT GURU</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='me-5 link-dark text-decoration-none fw-semibold' to='/catagory'>courses</Link>
            <Link className='me-5 link-dark text-decoration-none fw-semibold' to='/FAQ'>FAQ</Link>           
            <Link className='link-dark text-decoration-none fw-semibold' to='/blog'>Blog</Link>
          </Nav>
          <Form className="d-flex">
            
             {user?.displayName}
             {
             user.photoURL ? 
             <img style={{height: '39px'}} roundedCircle src={user.photoURL} alt=''/>
             : <>
             <Link to='/register'><Button variant="outline-secondary">Register</Button></Link>
             <Link to='/login'><Button variant="outline-secondary">Login</Button></Link>
             </>
             }           
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

export default Header