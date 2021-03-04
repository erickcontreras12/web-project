import './styles/home.css';
import Swal from 'sweetalert2';


function Home() {

  const deleteSwal = (data) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        document.getElementById('row_'+data.target.id.substring(4, data.target.id.length)).remove();
        window.localStorage.removeItem(data.target.id.substring(4, data.target.id.length));
      }
    })
  }
  console.log('myStorage', window.localStorage.length);
  let count = window.localStorage.length;
  document.addEventListener("DOMContentLoaded", function(event) {
    for (let i = 0; i < count; i++) {
      let element = JSON.parse(window.localStorage.getItem(i));
      if(element == null){
        count++;
        continue;
      }
      console.log(element);
      var row = document.createElement('tr');
      row.id = "row_"+i;
      var col = document.createElement('td'); //Name
      col.classList.add('text-center');
      col.innerHTML = element.name;
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
      var movement = '';
      switch(element.movement){
        case 1:
          movement = 'Very Slow';
          break;
        case 2:
          movement = 'Slow';
          break;
        case 3:
          movement = 'Normal';
          break;
        case 4:
          movement = 'Fast';
          break;
        default:
          movement = 'Very Fast';
          break;
      }
      col.appendChild(document.createTextNode(movement));
      row.appendChild(col);
  
      
      var col = document.createElement('td'); //Actions
      col.classList.add('text-center');
      var a = document.createElement('a');
      a.href = "/edit/"+i;

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
      deleteB.id = 'btn_'+i;

      col.appendChild(a);
      col.appendChild(span);
      col.appendChild(deleteB);
      row.appendChild(col);  
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

