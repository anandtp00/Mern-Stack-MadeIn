const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./dbconfig/dbconnection');




const app = express();
const port = process.env.PORT || 4500




app.use(cors());
app.use(express.json());




app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server up and running on ${port}`);
    }
});