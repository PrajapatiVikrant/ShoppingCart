
const mongoose = require('mongoose');
const productsch = mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    data:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model("tododata",productsch)