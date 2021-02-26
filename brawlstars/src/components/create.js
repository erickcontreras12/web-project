import './styles/create.css';
import Swal from 'sweetalert2';

function Create() {

  document.addEventListener("DOMContentLoaded", function(event) {
    function validateForm(){
      if(document.getElementById('name').value == ''){
        return false;
      }
      if(document.getElementById('health').value == ''){
        return false;
      }
      if(document.getElementById('damage').value == ''){
        return false;
      }
      if(document.getElementById('movement').value == '-1'){
        return false;
      }
      if(document.getElementById('reload').value == '-1'){
        return false;
      }
      if(document.getElementById('super').value == ''){
        return false;
      }
      return true;
    }


    function updateSubmit(){
      if(!validateForm()){
        errorSwal();
        return false;
      }

      let temp = {
        'name' : document.getElementById('name').value,
        'health' : document.getElementById('health').value,
        'damage' : document.getElementById('damage').value,
        'movement' : document.getElementById('movement').value,
        'reload' : document.getElementById('reload').value,
        'super' : document.getElementById('super').value,
      }

      window.localStorage.setItem(window.localStorage.length, JSON.stringify(temp));
      Swal.fire({
        icon: 'success',
        title: 'New brawler created!',
        showConfirmButton: false,
        timer: 1500
      })

      cleanFields();
      return;
    }

    function cleanFields(){
      document.getElementById('name').value = '';
      document.getElementById('health').value = '';
      document.getElementById('damage').value = '';
      document.getElementById('movement').value = '-1';
      document.getElementById('reload').value = '-1';
      document.getElementById('super').value = '';
    }

    document.getElementById('submitBtn').onclick = updateSubmit;
  });

  const errorSwal = () => {
    Swal.fire({
      title: 'Oh oh!',
      text: "You cannot left an empty field",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes!'
    });
  }

  

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
              <form id="form">
                {/* NAME */}
                <div className="row mt-5 text-center">
                  <div className="col-1 col-lg-1">&nbsp;</div>
                  <div className="col-2 col-lg-2 ml-auto mr-auto">
                    <span className="font-weight-bold">Name</span>
                  </div>
                  <div className="col-5 col-lg-8 ml-auto mr-5">
                    <input type="text" id="name" className="rounded border-secondary create-input"></input>
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
                    <input type="number" id="health" className="rounded border-secondary create-input"></input>
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
                    <input type="number" id="damage" className="rounded border-secondary create-input"></input>
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
                    <select id="movement" className="rounded border-secondary create-input picker-input" placeholder="">
                      <option value="-1" selected>Select a speed option...</option>
                      <option value="1">Very Slow</option>
                      <option value="2">Slow</option>
                      <option value="3">Normal</option>
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
                    <select id="reload" className="rounded border-secondary create-input picker-input" placeholder="">
                      <option value="-1" selected>Select a speed option...</option>
                      <option value="1">Very Slow</option>
                      <option value="2">Slow</option>
                      <option value="3">Normal</option>
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
                    <input type="text" id="super" className="rounded border-secondary create-input"></input>
                  </div>
                  <div className="col-4 col-lg-1">&nbsp;</div>
                </div>
                {/* BUTTON */}
                <div className="row justify-content-center">
                    <button type="button" className="btn btn-rounded btn-orange" id="submitBtn" >
                      Create
                  </button>
                </div>
              </form>
            </div>
          </div >
        </div>
      </div>
    </div >
  );
}

export default Create;