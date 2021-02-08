const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  no: { type: Number, required: true },
  make: { type: String, required: true },
  carmodel: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: String, required: true },
  status: { type: String, required: true }
});

vehicleSchema.index({ '$**': 'text' })

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;