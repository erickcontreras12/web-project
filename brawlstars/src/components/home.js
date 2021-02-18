import './styles/home.css';
import Swal from 'sweetalert2';


function borrar(){
  Swal.fire({  
    title: 'Are you sure?',  
    text: 'Are you sure you want to delete this item?',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonColor: '#3085d6',  
    cancelButtonColor: '#d33',  
    confirmButtonText: 'Yes!'  
  });  
}

function Home() {
  let deleteSwal = borrar();


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
                  Pick your brawler
                  </span>
              </div>
              <div className="col-2 col-lg-5"></div>
              <div className="col-5 col-lg-2">
                <a href="/create">
                  <button className="btn btn-rounded btn-orange" >
                    New Brawler
                  </button>
                </a>
              </div>
            </div>
            <div className="row mt-3 table_index">
              <table className="table  table-hover">
              <thead>
                <tr>
                  <th className="text-center">Name</th>
                  <th className="text-center">Health</th>
                  <th className="text-center">Damage</th>
                  <th className="text-center">Speed</th>
                  <th className="text-center">&nbsp;</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <td className="text-center">Colt</td>
                    <td className="text-center">1212</td>
                    <td className="text-center">345</td>
                    <td className="text-center">Fast</td>
                    <td className="text-center">
                      
                      <a href="/edit/1">
                      <button className="btn btn-sm btn-rounded btn-orange" >
                        Edit
                      </button>
                      </a>
                      <span className="mr-2"></span>
                      <button className="btn btn-sm btn-rounded btn-danger" onClick={deleteSwal}>
                        Delete
                      </button>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Home;

