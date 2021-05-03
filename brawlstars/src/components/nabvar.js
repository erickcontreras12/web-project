import { Component } from "react";
import './styles/nabvar.css';
import BrawlLogo from "./../assets/bs_logo.png";
import { useAuth } from './../contexts/AuthContext'
import { useHistory } from "react-router-dom";

export default function Navbar({ children }) {

  const { logOut } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logOut();
      history.push('/login');
    } catch {

    }
  }

  return (
    <div className="body_in_app">
      <div className="container-fluid">
        <div className="row nav-crud">
          {/* IMG Logo */}
          <div className="col-4 col-lg-3">
            <img src={BrawlLogo} className="logo_img_home"></img>
          </div>

          <div className="col-4 col-lg-7"></div>
          <div className="col-3 col-lg-2 justify-content-center">

            <div className="row mt-3 ">
              <form>
                <a className="logout-link" onClick={() => handleLogout()}>Cerrar sesión</a>
              </form>
              
            </div>
            <div className="row">&nbsp;</div>
          </div>
        </div>
        <div className="row">
          <div className="container">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
