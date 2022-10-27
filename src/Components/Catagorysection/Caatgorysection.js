import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Caatgorysection({courses}) {
     console.log(courses)
  return (
    <div className=''>
     {
          courses.map(name => <Link to={`/coursedeatels/${name.id}`}
          ><Button Button variant="outline-warnig" className='px-5'>{name.title}</Button></Link>)
     }
    </div>
  )
}

export default Caatgorysection