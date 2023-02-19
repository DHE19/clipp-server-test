const express = require('express');
const router = express.Router();
const {getVehicles,setNewVechicle,getVehicle,deleteVehicle} = require('../controllers/vehicle.controller.js');

//devuelve todos los carros
router.get('/', getVehicles);
//crea un nuevo documento en nuestro colección
router.post('/', setNewVechicle);
//devuelve un vehiculo en especifico
router.get('/:id',getVehicle);
//elimina un vehiculo (cambia el valor de la propiedad "delete")
router.delete('/:id', deleteVehicle);

module.exports = router;