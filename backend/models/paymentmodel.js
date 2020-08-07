const mongooose = require('mongoose');


const Schema = mongooose.Schema;

const paymentSchema = new Schema({
    userid : {
        type : String,
        required: true,
        unique : true,
        minlength : 3
    }, 
    payment_type: {
        type : String,
        required: true,
        minlength : 3
    },
    name: {
        type : String,
        required: true,
        minlength : 3
    },
    amount : {
        type : Number,
        required: true
    },
    mobile : {
        type : Number,
        required: true,
        minlength : 10
    },
    payment_date :{
        type : Date,
        required: true,
    },
    status : {
        type : String,
        required: true,
    },
    payment_ref : {
        type : String,
        required: true,
    },
    payment_remarks : {
        type : String,
        required: true,
    }
},{
    timestamps : true
});

const Payment = mongooose.model('payment_collection', paymentSchema);

module.exports = Payment;