import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

function CourseCard({allcourses}) {
  return (
    <div className='card-contener'>
      {
        allcourses.map(courses =>  
          <CardGroup>
          <Card>
          <Card.Img variant="top" src={courses.image} />
          <Card.Body>
            <Card.Title>{courses.title}</Card.Title>
            <Card.Text>
              {courses.description}
              <Link to={`/coursedeatels/${courses.id}`}>Explore</Link>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <div className='d-flex flex-col justify-content-between'>
                <div>
                <p>Ratings: {courses.rate}</p>
                </div>
                <div>
                <p>parces: {courses.count}</p>
                </div>
              </div>
            </small>
          </Card.Footer>
        </Card>
        </CardGroup>
          )
      }
    </div>
  )
}

export default CourseCard