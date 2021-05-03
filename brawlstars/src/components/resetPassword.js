import React, { useRef, useState } from "react";
import './styles/login.css';
import LayoutNoAuth from './no-auth-layout';
import { useAuth } from './../contexts/AuthContext'
import { useHistory} from "react-router-dom"; 
import Swal from 'sweetalert2';

export default function Register() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function validateForm() {
    if (emailRef.current.value == '') return false;
    return true;
  }

  async function submit(e) {
    e.preventDefault();
    if (!validateForm()) {
      errorSwal('Write your email to continue');
      return false;
    }


    try {
      setLoading(true);
      await resetPassword(emailRef.current.value);
      Swal.fire({
        icon: 'warning',
        title: 'An email was sent, check your imbox',
        showConfirmButton: false,
        timer: 1500
      });
      emailRef.current.value = '';
    }
    catch (e) {
      errorSwal('Failed to send email password', e.message)
    }
    setLoading(false)
  }

  function errorSwal(textInformation, titleInfomartion = 'Oh oh!'){
    Swal.fire({
      title: titleInfomartion,
      text: textInformation ,
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Got it!'
    });
  }

  return (
    <LayoutNoAuth>
      <div className="col-2 col-s m-1 col-md-1 col-lg-1">
      </div>

      {/* SignUp Form */}
      <div className="col-8 col-sm-4 col-md-3 col-lg-3 text-center login-container">
        {/* IMG Logo */}
        <img src="./assets/bs_logo.png" className="logo_img"></img>
        {/* Username */}
        <div className="row justify-content-left mt-3">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <span className="font-weight-bold">Password Reset</span>
          </div>
        </div>

        <form onSubmit={submit}>
          <div className="row justify-content-left mt-3 margin-left">
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


          {/* Boton */}
          <div className="row justify-content-center mt-4">
            <a>
              <button className="btn btn-primary" type="submit" id="submitBtn" disabled={loading}>Reset Password</button>
            </a>
          </div>
        </form>
        {/* Boton */}
        <div className="row justify-content-center mt-4">
          <span >Already own an account? <a className="link" href="/login">log in</a></span>
        </div>
      </div>

      <div className="col-2 col-sm-1 col-md-8 col-lg-8">
      </div>
    </LayoutNoAuth>
  )
}
