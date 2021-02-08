import React, { Component } from 'react';
import axios from 'axios';

export default class AddVehicle extends Component {

  constructor(props) {

    super(props);


    this.onChangeNo = this.onChangeNo.bind(this);
    this.onChangeMake = this.onChangeMake.bind(this);
    this.onChangeCarModel = this.onChangeCarModel.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      no: 0,
      make: '',
      carmodel: '',
      year: '',
      price: '$',
      status: 'Live'
    }
  }

  onChangeNo(e) {
    this.setState({
      no: e.target.value
    });
  }

  onChangeMake(e) {
    this.setState({
      make: e.target.value
    });
  }

  onChangeCarModel(e) {
    this.setState({
      carmodel: e.target.value
    });
  }

  onChangeYear(e) {
    this.setState({
      year: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const vehicle = {
      no: this.state.no,
      make: this.state.make,
      carmodel: this.state.carmodel,
      year: this.state.year,
      price: this.state.price,
      status: this.state.status
    }
    console.log(vehicle);

    axios.post('http://localhost:5000/vehicles/add/', vehicle)
      .then(res => console.log(res.data));

    window.location = '/';
  }


  render() {
    return (
      <div className="container">
        <h3>Add your new vehicle!</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>No: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.no}
              onChange={this.onChangeNo}
            />
          </div>
          <div className="form-group">
            <label>Make: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.make}
              onChange={this.onChangeMake}
            />
          </div>
          <div className="form-group">
            <label>Car Model: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.carmodel}
              onChange={this.onChangeCarModel}
            />
          </div>
          <div className="form-group">
            <label>Year: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.year}
              onChange={this.onChangeYear}
            />
          </div>
          <div className="form-group">
            <label>Price: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.price}
              onChange={this.onChangePrice}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="statusOptions"
                id="statusLive"
                value="Live"
                className="form-check-input"
                checked={this.state.status === 'Live'}
                onChange={this.onChangeStatus}
              />
              <label className="form-check-label">Live</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="statusOptions"
                id="statusSold"
                value="Sold"
                className="form-check-input"
                checked={this.state.status === 'Sold'}
                onChange={this.onChangeStatus}
              />
              <label className="form-check-label">Sold</label>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Add New Vehicle" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}