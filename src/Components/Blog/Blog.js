import React from 'react'

function Blog() {
  return (
    <div className='vh-100 mt-5'>
      <div>
        <h4>1. what is cors?</h4>
        <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource</p>
      </div>
      <div>
        <h4>2. Why are you using firebase?</h4>
        <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience</p>
      </div>
      <div>
        <h4>3. How does the private route work?</h4>
        <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated</p>
      </div>
      <div>
        <h4>4. What is Node? How does Node work?</h4>
        <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
      </div>
    </div>
  )
}

export default Blog