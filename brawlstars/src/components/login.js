import './styles/login.css';
import { useHistory } from 'react-router-dom';

function Login() {
  let history = useHistory();

  const redirect = () => {
    history.push('/home')
  }

  return (
    <div className="body_login">
      <div className="container-fluid">
        <div className="row">
          <div className="col-1">
          </div>

          {/* Login Form */}
          <div className="col-3 text-center" id="login-container">
            {/* IMG Logo */}
            <img src="./assets/bs_logo.png" id="logo_img"></img>
            {/* Username */}
            <div className="row justify-content-left mt-4 margin-left">
              <div className="row justify-content-center">
                <div className="col-4"></div>
                <div className="col-6">
                  <span className="font-weight-bold">Username</span>
                </div>
                <div className="col-2"></div>
              </div>
              <div className="row mt-2">
                <div className="col-3"></div>
                <div className="col-6">
                  <input type="text" width="300px" className="rounded border-secondary"></input>
                </div>
                <div className="col-2"></div>

              </div>
            </div>

            {/* Password */}
            <div className="row justify-content-left mt-3 margin-left">
              <div className="row justify-content-center">
                <div className="col-4"></div>
                <div className="col-6">
                  <span className="font-weight-bold">Password</span>
                </div>
                <div className="col-2"></div>
              </div>
              <div className="row mt-2">
                <div className="col-3"></div>
                <div className="col-6">
                  <input type="password" width="300px" className="rounded border-secondary"></input>
                </div>
                <div className="col-2"></div>

              </div>
            </div>

            {/* Boton */}
            <div className="row justify-content-center mt-3">
              <button className="btn btn-primary" type="button" onClick={redirect}>Login</button>
            </div>

            {/* Boton */}
            <div className="row justify-content-center mt-3">
            <span >Not a member? <a className="link">join now</a></span>
            </div>

            {/* Boton */}
            <div className="row justify-content-center mt-2">
            <a className="link ">Forgot password?</a>
            </div>

          </div>
          <div className="col-8">
          </div>
        </div>
      </div>
    </div >
  );
}

export default Login;