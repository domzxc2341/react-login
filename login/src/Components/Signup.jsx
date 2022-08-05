import React from 'react'
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
        <div>
       <h1> Register</h1>

       <p>Already have an account yet? <Link to ='/signin'> Sign in</Link></p>
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
        <button> Sign up </button>
    </form>

    </div>
  )
}

export default Signup