import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Button from 'react-bootstrap/Button';


const Home = () => {
     return (
          <div className='vh-100'>
               <div className='bg-img'>
                    <div className='heading-text'>
                    <h1>A New Career With IT Guru</h1>
                    <p>IT guru is onlin platform it provide It courses. chose your courses and grow your ability</p>
                    <Link to='/catagory'><Button className='px-5 fw-semibold fs-5' variant="outline-light">Courses</Button></Link>
                    </div>                   
               </div>
          </div>
     );
};

export default Home;