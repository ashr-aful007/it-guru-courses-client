import React from 'react'
import { useRouteError } from 'react-router-dom'
import './Errorpage.css'

function Errorpage() {
  const error = useRouteError()
  console.log(error)
  return (
    <div className='error-page'>
      <h3 className='text-denger'>{error.status}</h3>
      <h3 className='text-denger'>{error.statusText}</h3>
    </div>
  )
}

export default Errorpage