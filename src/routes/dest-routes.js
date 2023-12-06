const express = require('express')
const destinasiController = require('../controllers/destination-controller')
const routes = express.Router();

routes.get('/destinasi', destinasiController.getAllDestinasi);
routes.post('/tambah-destinasi', destinasiController.createDestinasi);
//routes.put('/update-hotel', hotelController.updateHotels);
routes.delete('/delete-destinasi', destinasiController.deleteDestinasi);



    module.exports = routes