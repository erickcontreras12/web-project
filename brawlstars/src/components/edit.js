import './styles/edit.css';

function Edit() {
  return (
    <div className="body_in_app">
      <div className="container-fluid">
        <div className="row nav-crud">
          {/* IMG Logo */}
          <div className="col-4 col-lg-3">
            <img src="./assets/bs_logo.png" className="logo_img_home"></img>
          </div>

          <div className="col-4 col-lg-7"></div>
          <div className="col-3 col-lg-2 justify-content-center">

            <div className="row mt-3 ">
              <a href="/login" className="logout-link">Cerrar sesión</a>
            </div>
            <div className="row">&nbsp;</div>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="row mt-2">&nbsp;</div>
            <div className="row mt-3">
              <div className="col-5 col-lg-5 text-position">
                <span className="inner-title">
                  Make a Brawler
                  </span>
              </div>
              <div className="col-2 col-lg-5"></div>
              <div className="col-5 col-lg-2">
                <a href="/home">
                  <button className="btn btn-rounded btn-secondary" >
                    Back
                  </button>
                </a>
              </div>
            </div>
            <div className="row mt-2 table_form justify-content-center">
              <form>
                {/* NAME */}
                <div className="row mt-5 text-center">
                  <div className="col-1 col-lg-1">&nbsp;</div>
                  <div className="col-2 col-lg-2 ml-auto mr-auto">
                    <span className="font-weight-bold">Name</span>
                  </div>
                  <div className="col-5 col-lg-8 ml-auto mr-5">
                    <input type="text" className="rounded border-secondary create-input" value="Colt"></input>
                  </div>
                  <div className="col-4 col-lg-1">&nbsp;</div>
                </div>
                {/* HEALTH */}
                <div className="row text-center">
                  <div className="col-1 col-lg-1">&nbsp;</div>
                  <div className="col-2 col-lg-2 ml-auto mr-auto">
                    <span className="font-weight-bold">Health</span>
                  </div>
                  <div className="col-5 col-lg-8 ml-auto mr-5">
                    <input type="number" className="rounded border-secondary create-input" value="3920"></input>
                  </div>
                  <div className="col-4 col-lg-1">&nbsp;</div>
                </div>
                {/* DAMAGE */}
                <div className="row text-center">
                  <div className="col-1 col-lg-1">&nbsp;</div>
                  <div className="col-2 col-lg-2 ml-auto mr-auto">
                    <span className="font-weight-bold">Damage</span>
                  </div>
                  <div className="col-5 col-lg-8 ml-auto mr-5">
                    <input type="number" className="rounded border-secondary create-input" value="504"></input>
                  </div>
                  <div className="col-4 col-lg-1">&nbsp;</div>
                </div>
                {/* MOVEMENT SPEED */}
                <div className="row text-center">
                  <div className="col-1 col-lg-1">&nbsp;</div>
                  <div className="col-2 col-lg-2 ml-auto mr-auto">
                    <span className="font-weight-bold">Movement Speed</span>
                  </div>
                  <div className="col-5 col-lg-8 ml-auto mr-5 mt-2">
                    <select className="rounded border-secondary create-input picker-input" placeholder="">
                      <option value="-1">Select a speed option...</option>
                      <option value="1">Very Slow</option>
                      <option value="2">Slow</option>
                      <option value="3" selected>Normal</option>
                      <option value="4">Fast</option>
                      <option value="5">Very Fast</option>
                    </select>
                  </div>
                  <div className="col-4 col-lg-1">&nbsp;</div>
                </div>
                {/* RELOAD SPEED */}
                <div className="row text-center">
                  <div className="col-1 col-lg-1">&nbsp;</div>
                  <div className="col-2 col-lg-2 ml-auto mr-auto">
                    <span className="font-weight-bold">Reload Speed</span>
                  </div>
                  <div className="col-5 col-lg-8 ml-auto mr-5 mt-2">
                    <select className="rounded border-secondary create-input picker-input" placeholder="">
                      <option value="-1" selected>Select a speed option...</option>
                      <option value="1">Very Slow</option>
                      <option value="2">Slow</option>
                      <option value="3" selected>Normal</option>
                      <option value="4">Fast</option>
                      <option value="5">Very Fast</option>
                    </select>
                  </div>
                  <div className="col-4 col-lg-1">&nbsp;</div>
                </div>
                {/* SUPER */}
                <div className="row text-center">
                  <div className="col-1 col-lg-1">&nbsp;</div>
                  <div className="col-2 col-lg-2 ml-auto mr-auto">
                    <span className="font-weight-bold">Super</span>
                  </div>
                  <div className="col-5 col-lg-8 ml-auto mr-5">
                    <input type="text" className="rounded border-secondary create-input" value="Bullet Storm"></input>
                  </div>
                  <div className="col-4 col-lg-1">&nbsp;</div>
                </div>
                {/* BUTTON */}
                <div className="row justify-content-center">
                  <a href="/home">
                    <button type="button" className="btn btn-rounded btn-orange" >
                      Save
                  </button>
                  </a>
                </div>
              </form>
            </div>
          </div >
        </div>
      </div>
    </div >
  );
}

export default Edit;