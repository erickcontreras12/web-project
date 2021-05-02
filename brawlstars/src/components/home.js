import { React, Component } from "react";
import './styles/home.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import Navbar from './nabvar';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brawlers: []
    };
  }

  componentDidMount() {
    this.makeBrawlersRequest();
  }

  makeBrawlersRequest() {
    axios.get(`http://localhost:4000/brawlers/getAll`)
      .then(res => {
        this.setState({ brawlers: res.data.values });
      });
  }

  deleteSwal(data) {
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
        axios.delete(`http://localhost:4000/brawlers/delete/${data}`)
          .then(res => {
            this.makeBrawlersRequest();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
          });

      }
    })
  }

  setTableBody() {
    if (this.state.brawlers) {
      return this.state.brawlers.map(item =>
        <tr key={item._id}>
          <td className="text-center">{item.name}</td>
          <td className="text-center">{item.health}</td>
          <td className="text-center">{item.damage}</td>
          <td className="text-center">{this.getSpeedName(item.movement)}</td>
          <td className="text-center">{this.getSpeedName(item.reload)}</td>
          <td className="text-center">{item.super}</td>
          <td className="text-center">
            <a href={'/edit/' + item._id}>
              <button className="btn btn-sm btn-rounded btn-orange">
                Edit
              </button>
            </a>
            <span className="mr-2"></span>
            <button className="btn btn-sm btn-rounded btn-danger" onClick={() => this.deleteSwal(item._id)}>
              Delete
              </button>
          </td>
        </tr>
      );
    }
  }

  getSpeedName(movement) {
    switch (movement) {
      case 1:
        return 'Very Slow';
      case 2:
        return 'Slow';
      case 3:
        return 'Normal';
      case 4:
        return 'Fast';
      case 5:
        return 'Very Fast';
      default:
        return '';
    }
  }

  render() {
    return (
      <Navbar>
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
        <div className="row mt-3 table_index tableFixHead">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="text-center">Name</th>
                <th className="text-center">Health</th>
                <th className="text-center">Damage</th>
                <th className="text-center">Movement Speed</th>
                <th className="text-center">Reload Speed</th>
                <th className="text-center">Super</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody id="tBody">
              {this.setTableBody()}
            </tbody>
          </table>
        </div>
      </Navbar>
    );
  }
}

export default Home;

