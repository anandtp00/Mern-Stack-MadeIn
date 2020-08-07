const mongooose = require('mongoose');


const Schema = mongooose.Schema;

const userSchema = new Schema({
    username: {
        type : String,
        required: true,
        minlength : 3
    },
    email : {
        type : String,
        required: true,
        unique : true,
        minlength : 3
    },
    mobile : {
        type : Number,
        required: true,
        minlength : 10
    },
    status : {
        type : String,
        required: true,
        default : 'Active',
    }
},{
    timestamps : true
});

const User = mongooose.model('user_collection', userSchema);

module.exports = User;