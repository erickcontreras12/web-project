import './styles/login.css';

function Login() {


  return (
    <div className="body_login">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 col-sm-1 col-md-1 col-lg-1">
          </div>

          {/* Login Form */}
          <div className="col-8 col-sm-4 col-md-3 col-lg-3 text-center login-container">
            {/* IMG Logo */}
            <img src="./assets/bs_logo.png" className="logo_img"></img>
            {/* Username */}
            <div className="row justify-content-left mt-4 margin-left">
              <div className="row justify-content-center">
                <div className="col-sm-3 col-md-2 col-lg-3"></div>
                <div className="col-sm-3 col-md-5 col-lg-6">
                  <span className="font-weight-bold">Username</span>
                </div>
                <div className="col-sm-1 col-md-1 col-lg-2"></div>
              </div>
              <div className="row mt-2">
                <div className="col-sm-2 col-md-2 col-lg-2"></div>
                <div className="col-sm-3 col-md-6 col-lg-6">
                  <input type="text" width="300px" className="rounded border-secondary"></input>
                </div>
                <div className="col-sm-1 col-md-2 col-lg-2"></div>

              </div>
            </div>

            {/* Password */}
            <div className="row justify-content-left mt-3 margin-left">
              <div className="row justify-content-center">
                <div className="col-sm-3 col-md-3 col-lg-3"></div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <span className="font-weight-bold">Password</span>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2"></div>
              </div>
              <div className="row mt-2">
                <div className="col-sm-2 col-md-2 col-lg-2"></div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <input type="password" width="300px" className="rounded border-secondary"></input>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2"></div>

              </div>
            </div>

            {/* Boton */}
            <div className="row justify-content-center mt-3">
              <a href="/home">
                <button className="btn btn-primary" type="button">Login</button>
              </a>
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
          
          <div className="col-2 col-sm-1 col-md-8 col-lg-8">
          </div>
        </div>
      </div>
    </div >
  );
}

export default Login;