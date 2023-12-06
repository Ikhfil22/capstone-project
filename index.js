const express = require('express');
const bodyParser = require('body-parser');

/*const { Sequelize } = require('sequelize');
const sequelize = require('./src/config/db_config.js');
const auth = require('./src/routes/authRoutes.js');
const router = require('./src/routes/authRoutes.js');
const bodyParser = require('body-parser');
const multer = require('multer');
require('dotenv').config();*/


const app = express();
const hotelRoutes = require('./src/routes/hotel-routes.js')
const destinasiRoutes = require('./src/routes/dest-routes.js')

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 100000, limit:"500mb" }));
app.use(express.static('images'));

app.use('/',hotelRoutes);
app.use('/',destinasiRoutes);

/*
const userroutes = require('./src/routes/userroutes.js');
const home = require('./src/routes/homeroutes.js');
const tampil = require('./src/routes/viewhotels.js')
const addhotels = require('./src/routes/add-hotels.js')
const hotel = require('./src/model/hotels.js');
const deleteHotel = require('./src/routes/delete-hotels.js');
const updatehotels = require('./src/routes/update-hotels.js');
const viewHotels = require('./src/routes/viewhotels.js');
const destination = require('./src/model/dest-models.js');
const adddest = require('./src/routes/adddest.js');
const updatedest = require('./src/routes/update-dest.js');
const deletedest = require('./src/routes/delete-dest.js');
const viewdest = require('./src/routes/update-dest.js');


app.use(express.json());
app.use(bodyParser.json());

//ROUTING
app.use(userroutes);
app.use('/hotels',tampil);
app.use(addhotels);


app.use( updatehotels);
app.use(deleteHotel);
app.use(viewHotels);
app.use(adddest);
app.use(updatedest);
app.use(deletedest);
app.use(viewdest);



app.get('/a',(req,res) =>{
  res.sendFile('D:/ump/revou/fe/index.html')
});

app.get('/index.html',(req,res) =>{
  res.sendFile('D:/ump/revou/fe/index.html')
});
app.get('/src/page/destinasi.html',(req,res) =>{
  res.sendFile('D:/ump/revou/fe/src/page/destinasi.html')
});
app.get('/src/page/about.html',(req,res) =>{
  res.sendFile('D:/ump/revou/fe/src/page/about.html')
});




  app.get('/test',async (req,res) => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
    res.send('Hello Exspress')
  });


  app.post('/users', async (req,res) => {
    try {
      await user.create({
        id_user: 2,
        name: ikhfil,
        username : ikhfil22,
        password: hahaha,
      })
    } catch (e) {
      console.error('Unable to connect to the database:', error);
    }
  })

*/
app.listen(process.env.PORT, () =>{
  console.log('connection')
})