import React from 'react'
import { useRouteError } from 'react-router-dom'

function Errorpage() {
  const error = useRouteError()
  console.log(error)
  return (
    <div>
      {error.status}
      {error.statusText}
    </div>
  )
}

export default Errorpage