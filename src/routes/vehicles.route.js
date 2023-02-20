
const express = require('express');
const router = express.Router();
const {getVehicles,setNewVechicle} = require('../controllers/vehicle.controller.js');

//devuelve todos los carros
router.get('/', getVehicles);
//crea un nuevo documento en nuestro colección
router.post('/', setNewVechicle);

module.exports = router;