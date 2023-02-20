const express = require('express');
const vehicleRoutes = require('./src/routes/vehicle.route.js');
const vehiclesRoutes = require('./src/routes/vehicles.route.js');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//middleware routes
app.use('/vehicle',vehicleRoutes);
app.use('/vehicles',vehiclesRoutes)

//TODO: desechar
app.get('/', (req, res) => {

    //aquí posiblemente no se va hacer nada
    res.send('hello world');
});

const port = process.env.PORT || 3001; 
app.listen(port, () => console.log(`Listening on port: ${port}`));