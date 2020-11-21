const mongoose = require('mongoose')

var Employee = mongoose.model('Employee',
{
    Name : {type:String},
    Dob : {type:Date},
    Gender : {type:String},
    Salary : {type:Number},
},'Employee')

module.exports = { Employee}