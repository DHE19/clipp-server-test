const express = require('express');
const router = express.Router();
const {getVehicle,deleteVehicle} = require('../controllers/vehicle.controller.js');

//devuelve un vehiculo en especifico
router.get('/:id',getVehicle);
//elimina un vehiculo (cambia el valor de la propiedad "delete")
router.delete('/:id', deleteVehicle);

module.exports = router;