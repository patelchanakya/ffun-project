const router = require('express').Router();

let Vehicle = require('../models/vehicle.model');

router.route('/').get((req, res) => {
  Vehicle.find()
    .then(vehicles => res.json(vehicles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const no = Number(req.body.no);
  const make = req.body.make;
  const carmodel = req.body.carmodel;
  const year = Number(req.body.year);
  const price = req.body.price;
  const status = req.body.status;

  const newVehicle = new Vehicle({
    no,
    make,
    carmodel,
    year,
    price,
    status,
  });

  newVehicle.save()
    .then(() => res.json('Vehicle added.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Vehicle.findById(req.params.id)
    .then(vehicle => res.json(vehicle))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Vehicle.findByIdAndDelete(req.params.id)
    .then(vehicle => res.json(vehicle))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Vehicle.findById(req.params.id)
    .then(vehicle => {
      vehicle.no = Number(req.body.no);
      vehicle.make = req.body.make;
      vehicle.carmodel = req.body.carmodel;
      vehicle.year = Number(req.body.year);
      vehicle.price = req.body.price;
      vehicle.status = req.body.status;

      vehicle.save()
        .then(() => res.json('Vehicle edited.'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
