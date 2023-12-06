const express = require('express')
const hotelController = require('../controllers/hotel-controller')
const routes = express.Router();

routes.get('/hotel', hotelController.getAllHotels);
routes.post('/tambah-hotel', hotelController.createHotels);
//routes.put('/update-hotel', hotelController.updateHotels);
routes.delete('/delete-hotel', hotelController.deleteHotels);



    module.exports = routes