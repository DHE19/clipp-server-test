const express = require('express');
const vehiclesRoutes = require('./src/routes/vehicle.route.js');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//middleware routes
app.use('/vehicle',vehiclesRoutes);

//TODO: desechar
app.get('/', (req, res) => {

    //aquí posiblemente no se va hacer nada
    res.send('hello world');
});

const port = process.env.PORT || 3001; 
app.listen(port, () => console.log(`Listening on port: ${port}`));