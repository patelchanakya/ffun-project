import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Mychart from "./mychart";

import Searchbox from "./searchbox";

const Vehicle = props => (
  <tr>
    <td>{props.vehicle.no}</td>
    <td>{props.vehicle.make}</td>
    <td>{props.vehicle.carmodel}</td>
    <td>{props.vehicle.year}</td>
    <td>{props.vehicle.price}</td>
    <td>{props.vehicle.status}</td>
    <td>
      <Link to={"/edit/" + props.vehicle._id}>edit</Link>
    </td>
  </tr>
)

export default class MasterVehicle extends Component {

  constructor(props) {
    super(props);

    this.vehicleList = this.vehicleList.bind(this);

    this.state = { vehicles: [], searchField: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/vehicles/')
      .then(response => {
        this.setState({ vehicles: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  vehicleList() {
    return this.state.vehicles.map(currentvehicle => {
      return <Vehicle vehicle={currentvehicle} key={currentvehicle._id} />;
    })
  }

  
  render() {
    
    return (
      <div className="container">
        <Mychart />
        <br />
        <h3>Chanakya's Vehicle Database</h3>
        <br/>
        <Searchbox placeholder="Search the databse" handleChange={(e) => this.setState({searchField: e.target.value})}/>

        <br/>
      
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>No</th>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.vehicleList()}
          </tbody>
        </table>
      </div>
    )
  }
}