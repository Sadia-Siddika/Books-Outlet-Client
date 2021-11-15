import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } = useAuth();

  const history = useHistory()
  const location = useLocation()
  const url = location.state?.from || "/home"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmail = e => {
    setEmail(e.target.value);
  }

  const handlePassword = e => {
    setPassword(e.target.value);
  }

  const handleLogInWithEmailAndPassword = e => {
    e.preventDefault();
    loginWithEmailAndPassword(email, password)
      .then((res) => {
        setIsLoading(true)
        setUser(res.user);
        history.push(url)
      })
      .catch((error) => {
      })
      .finally(() => {
        setIsLoading(false)
      })
  };

  const handleLogInWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true)
        setUser(res.user)
        saveUserDB(res.user.email, res.user.displayName)
        history.push(url)
      }
      )
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  };

  const saveUserDB = (email, displayName) => {
    const user = { email, displayName }
    fetch('https://hidden-basin-07858.herokuapp.com/users', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  };

  return (
    <div className="my-5 p-5">
      <h1 className="text-center">User Log In</h1>
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={handleLogInWithEmailAndPassword} className="container w-50">
          <div className="row my-2">
            <div className="input-group">
              <div className="input-group-text fw-bold"><i className="fas fa-envelope"></i></div>
              <input type="text" className="form-control" onBlur={handleEmail} placeholder="Enter Your Email" />
            </div>
          </div>
          <div className="row my-2">
            <div className="input-group">
              <div className="input-group-text fw-bold"><i className="fas fa-key"></i></div>
              <input type="password" className="form-control" onBlur={handlePassword} placeholder="Enter Your Password" />
              {/* <p>{error}</p> */}
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark fw-bold">Sign In</button>
            <hr />
          </div>
        </form>
      </div>
      <div className="text-center">
        <button onClick={handleLogInWithGoogle} type="submit" className="btn btn-dark fw-bold">Sign In with Google</button>
        <p className="fw-bold">New User..? Please <Link className="text-decoration-none" to="/registration">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
