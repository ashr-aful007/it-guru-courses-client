import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Caatgorysection from '../Catagorysection/Caatgorysection';
import CourseCard from '../CourseCard/CourseCard';
import './Courses.css';


function Catagory() {
  const catagory = useLoaderData()
  console.log(catagory)
  
  return (
    <div className='courses-container'>
    <div className='d-lg-block d-md-block d-sm-none'>
    <Caatgorysection courses={catagory}></Caatgorysection>
    </div>
    <div className=''>  
     <CourseCard allcourses={catagory}></CourseCard>
    </div>
    </div>
  )
}

export default Catagory