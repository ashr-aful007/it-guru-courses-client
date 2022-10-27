import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom'

function CourseDeatels() {
     const singleCourse = useLoaderData()
     const {id,title,price,description,image,rate,count} = singleCourse;
     
  return (
    <div>
      {
          <CardGroup>
          <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
          <div div className='pb-1'>
            <small className="text-muted">
              <div className='d-flex flex-col justify-content-between'>
                <div>
                <Button variant="outline-primary">Regular</Button>
                </div>
                <div>
                <Link to='/primeamcourses'><Button variant="outline-primary">Get Premium</Button></Link>
                </div>
              </div>
            </small>
          </div>
        </Card>
        </CardGroup>
      }    
    </div>
  )
}

export default CourseDeatels