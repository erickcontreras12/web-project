import './styles/home.css';
import Swal from 'sweetalert2';

var myStorage = window.localStorage;

function Home() {

  let Colt = { 'name': 'Colt', 'health': 3920, 'damage': 504, 'movement': 'Normal', 'reload': 'Normal', 'super': 'Bullet Storm' };
  let Shelly = { 'name': 'Shelly', 'health': 5320, 'damage': 420, 'movement': 'Normal', 'reload': 'Normal', 'super': 'Super Shell' };
  let Brock = { 'name': 'Brock', 'health': 3360, 'damage': 1456, 'movement': 'Normal', 'reload': 'Slow', 'super': 'Rocket Rain' };
  let Nita = { 'name': 'Nita', 'health': 5600, 'damage': 1232, 'movement': 'Normal', 'reload': 'Very Fast', 'super': 'Overbearing' };
  let Dinamyke = { 'name': 'Dynamike', 'health': 3920, 'damage': 1120, 'movement': 'Normal', 'reload': 'Normal', 'super': 'Big Barrel O Boom' };

  myStorage.setItem(0, JSON.stringify(Colt));
  myStorage.setItem(1, JSON.stringify(Shelly));
  myStorage.setItem(2, JSON.stringify(Brock));
  myStorage.setItem(3, JSON.stringify(Nita));
  myStorage.setItem(4, JSON.stringify(Dinamyke));

  const deleteSwal = () => {
    Swal.fire({
      title: 'STOP!',
      text: 'Are you sure you want to delete this brawler?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    });
  }

  console.log('myStorage', myStorage.length);

  document.addEventListener("DOMContentLoaded", function(event) {
    for (let i = 0; i < myStorage.length; i++) {
      let element = JSON.parse(myStorage.getItem(i));
      console.log(element);
      var row = document.createElement('tr');
  
      var col = document.createElement('td'); //Name
      col.classList.add('text-center');
      col.innerHTML = element["name"];
      row.appendChild(col);
  
      var col = document.createElement('td'); //Health
      col.classList.add('text-center');
      col.appendChild(document.createTextNode(element.health));
      row.appendChild(col);
  
      var col = document.createElement('td'); //Damage
      col.classList.add('text-center');
      col.appendChild(document.createTextNode(element.damage));
      row.appendChild(col);
  
      var col = document.createElement('td'); //Movement
      col.classList.add('text-center');
      col.appendChild(document.createTextNode(element.movement));
      row.appendChild(col);
  
      
      var col = document.createElement('td'); //Actions
      col.classList.add('text-center');
      var a = document.createElement('a');
      a.href = "/edit/1";

      var editB = document.createElement('button');
      editB.classList.add('btn');
      editB.classList.add('btn-sm');
      editB.classList.add('btn-rounded');
      editB.classList.add('btn-orange');
      editB.innerHTML = 'Edit';
      a.appendChild(editB);

      var span = document.createElement('span');
      span.classList.add('mr-2');

      var deleteB = document.createElement('button');
      deleteB.classList.add('btn');
      deleteB.classList.add('btn-sm');
      deleteB.classList.add('btn-rounded');
      deleteB.classList.add('btn-danger');
      deleteB.onclick = deleteSwal;
      deleteB.innerHTML = 'Delete';

      col.appendChild(a);
      col.appendChild(span);
      col.appendChild(deleteB);
      row.appendChild(col);
  
      console.log('Fila ' + i, row);
  
      document.getElementById('tBody').appendChild(row);
    }
  });

  

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
                <tbody id="tBody">

                  

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

