import React from 'react'
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div>
        <div>
       <h1> Login</h1>

       <p>Dont have an account yet? <Link to ='/'> Sign up</Link></p>
       </div>
    <form>
        <div>
            <label>Email: </label>
            <input type="email" />
        </div>
        <div>
            <label>Password: </label>
            <input type="password" />
        </div>
        <button> Sign in </button>
    </form>

    </div>
  )
}

export default Signin