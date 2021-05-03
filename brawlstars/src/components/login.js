import React, { useRef, useState } from "react";
import './styles/login.css';
import LayoutNoAuth from './no-auth-layout';
import { useAuth } from './../contexts/AuthContext'
import { useHistory } from "react-router-dom"; 
import Swal from 'sweetalert2';

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { logIn } = useAuth()
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function validateForm() {
    if (emailRef.current.value == '') return false;
    if (passwordRef.current.value == '') return false;
    return true;
  }

  async function submit(e) {
    e.preventDefault();
    if (!validateForm()) {
      errorSwal('All fields are required');
      return false;
    }


    try {
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      history.push('/home');
    }
    catch (e) {
      errorSwal('Failed to sign in');
    }
    setLoading(false)
  }

  function errorSwal(textInformation) {
    Swal.fire({
      title: 'Oh oh!',
      text: textInformation,
      icon: 'warning',
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <LayoutNoAuth>
      <div className="col-2 col-sm-1 col-md-1 col-lg-1">
      </div>

      {/* Login Form */}

      <div className="col-8 col-sm-4 col-md-3 col-lg-3 text-center login-container">
        {/* IMG Logo */}
        <img src="./assets/bs_logo.png" className="logo_img"></img>
        {/* Username */}
        <form onSubmit={submit}>
          <div className="row justify-content-left mt-4 margin-left">
            <div className="row justify-content-center">
              <div className="col-sm-3 col-md-2 col-lg-2"></div>
              <div className="col-sm-7 col-md-8 col-lg-8">
                <span className="font-weight-bold">Email</span>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2"></div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-2 col-md-2 col-lg-2"></div>
              <div className="col-sm-8 col-md-8 col-lg-8">
                <input type="email" width="300px" className="rounded border-secondary" id="email" ref={emailRef}></input>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2"></div>
            </div>
          </div>

          {/* Password */}
          <div className="row justify-content-left mt-3 margin-left">
            <div className="row justify-content-center">
              <div className="col-sm-3 col-md-2 col-lg-2"></div>
              <div className="col-sm-7 col-md-8 col-lg-8">
                <span className="font-weight-bold">Password</span>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2"></div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-2 col-md-2 col-lg-2"></div>
              <div className="col-sm-8 col-md-8 col-lg-8">
                <input type="password" width="300px" className="rounded border-secondary" id="psw" ref={passwordRef}></input>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2"></div>
            </div>
          </div>

          {/* Boton */}
          <div className="row justify-content-center mt-3">
            <a href="/home">
              <button className="btn btn-primary" type="submit" disabled={loading}>Log in</button>
            </a>
          </div>
        </form>
        {/* Boton */}
        <div className="row justify-content-center mt-3">
          <span >Not a member? <a className="link" href="/register">join now</a></span>
        </div>

        {/* Boton */}
        <div className="row justify-content-center mt-2">
          <a className="link" href="/resetPassword">Forgot password?</a>
        </div>

      </div>

      <div className="col-2 col-sm-1 col-md-8 col-lg-8">
      </div>

    </LayoutNoAuth>

  )
}