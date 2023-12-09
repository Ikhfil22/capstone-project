const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

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
/*
// Setel EJS sebagai mesin templat
app.set('view engine', 'ejs');

// Tentukan lokasi folder views
app.set('view', path.join(__dirname, './src/view'));

app.use('/api', postRoutes);
*/
app.use('/',hotelRoutes);
app.use('/',destinasiRoutes);


app.listen(process.env.DATABASE_PORT,() =>{
  console.log('connection on port ' , process.env.DATABASE_PORT)
})
