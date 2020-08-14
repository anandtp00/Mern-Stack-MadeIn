require('dotenv').config();
const mongoose = require('mongoose');
const user = process.env.DBUSER;
const pass = process.env.DBPASS;
const database = process.env.DB;

const url = `mongodb+srv://${user}:${pass}@madein.hx4wi.mongodb.net/${database}?retryWrites=true&w=majority`;
const mongoConnect = mongoose.connect(process.env.MONGODB_URI || url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (error, success) => {
    if (error) {
        console.log('Error in DB connection : ' + JSON.stringify(error, undefined, 2));
    }else{
        console.log('mongoDb connection success!');
    }
});


module.exports = mongoConnect;
