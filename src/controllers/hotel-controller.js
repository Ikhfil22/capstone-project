const Hotel = require('../model/hotels');
/*const asyncHandler = require('express-async-handler');
const path = require('path');
const multer = require('multer');
const memoryStorage = multer.diskStorage({
  destination : './images',
  filename: (req, file, cb) =>{
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(req.file.originalename)}`)
   }
})

const upload = multer({storage:memoryStorage});*/




// controller menampilkan hotels
exports.getAllHotels= async (req,res, next) =>{
    try {
      const hotels = await Hotel.findAll();
      res.status(200).json(hotels);

      } catch (error) {
        console.error('Error fetching hotels:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      next(); 
    };


    // controller menambahkan hotels
    exports.createHotels = async (req, res, next) => {
      try {
          const { name,location, destination, price, facility, image} = req.body;
          
          
          const newData = await Hotel.create({        
            name, 
            location, 
            destination, 
            price, 
            facility, 
            image
            });
            res.status(201).json({
              message: 'Hotel berhasil ditambahkan',
              data: newData,
            });
          }
       catch (error) {
        console.error('Error saat menambahkan data:', error);
        // Kirim respons error
        res.status(500).json({
          message: 'Terjadi kesalahan saat menambahkan data',
          error: error.message,
        });
      }
      next();
    };


      // controller menghapus hotel
      exports.deleteHotels = async (req, res,next) => {
        const { id } = req.body;
        try {            
            const document = await Hotel.findByPk(id);

            if (!document) {
            return res.status(404).json({ message: 'Dokumen tidak ditemukan' });
        }

          await document.destroy();

            res.json({ message: 'Dokumen berhasil dihapus' });
            next();
          }
         catch (error) {
          console.error('Error saat menghapus data:', error);
          // Kirim respons error
          res.status(500).json({
            message: 'Terjadi kesalahan saat menghapus data',
            error: error.message,
          });
          next();
        }};

      //controller update hotel
      /*exports.updateHotels = async (req, res) => {
        try {
          validate.validateUpdateHotels(req,res), async() =>{
            const { id } = req.params;
            const { name,location,image } = req.body;
            await Hotel.update(
              {
                name,
                location,
                image
              },
              {
                where: {
                  id,
                },
              }
            );
            res.status(200).json({
              message: 'Data berhasil diubah',
              
            });
            next();
      
            
          }
          
        } catch (error) {
          console.error('Error saat mengubah data:', error);
          // Kirim respons error
          res.status(500).json({
            message: 'Terjadi kesalahan saat mengubah data',
            error: error.message,
          });
        }
      };*/


      


