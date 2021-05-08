import { React, Component } from "react";
import Navbar from './nabvar';
import './styles/create.css';
import Swal from 'sweetalert2';
import axios from 'axios';

class Create extends Component {
  constructor(props) {
    super(props);
  }

  errorSwal() {
    Swal.fire({
      title: 'Oh oh!',
      text: "You cannot left an empty field",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes!'
    });
  }

  validateForm() {
    if (document.getElementById('name').value == '') {
      return false;
    }
    if (document.getElementById('health').value == '') {
      return false;
    }
    if (document.getElementById('damage').value == '') {
      return false;
    }
    if (document.getElementById('movement').value == '-1') {
      return false;
    }
    if (document.getElementById('reload').value == '-1') {
      return false;
    }
    if (document.getElementById('super').value == '') {
      return false;
    }
    return true;
  }

  updateSubmit() {
    if (!this.validateForm()) {
      this.errorSwal();
      return false;
    }

    let brawler = {
      'name': document.getElementById('name').value,
      'health': parseInt(document.getElementById('health').value),
      'damage': parseInt(document.getElementById('damage').value),
      'movement': parseInt(document.getElementById('movement').value),
      'reload': parseInt(document.getElementById('reload').value),
      'super': document.getElementById('super').value,
    }

    axios.post(`http://localhost:4001/brawlers/create`, { brawler })
      .then(res => {
        console.log(res.data.status);
        Swal.fire({
          icon: 'success',
          title: 'New brawler created!',
          showConfirmButton: false,
          timer: 1500
        });
        this.cleanFields();

      }).catch(err => {
        switch (err.response.status) {
          case 409:
            Swal.fire({
              icon: 'warning',
              title: 'Brawler with this name already exists in the system, can\'t create another one.',
              showConfirmButton: false,
              timer: 1500
            })
            break;
          default:
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong with the creation process',
              showConfirmButton: false,
              timer: 1500
            })
            break;
        }
      });
    return;
  }

  cleanFields() {
    document.getElementById('name').value = '';
    document.getElementById('health').value = '';
    document.getElementById('damage').value = '';
    document.getElementById('movement').value = '-1';
    document.getElementById('reload').value = '-1';
    document.getElementById('super').value = '';
  }

  render() {
    return (
      <Navbar>
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
                <select id="movement" className="rounded border-secondary create-input picker-input" placeholder="" defaultValue="-1">
                  <option value="-1">Select a speed option...</option>
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
                <select id="reload" className="rounded border-secondary create-input picker-input" placeholder="" defaultValue="-1">
                  <option value="-1">Select a speed option...</option>
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
              <button type="button" className="btn btn-rounded btn-orange" id="submitBtn" onClick={() => { this.updateSubmit() }}>
                Create
                    </button>
            </div>
          </form>
        </div>

      </Navbar>
    )
  }
}

export default Create;