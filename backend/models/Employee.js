const mongoose = require('mongoose')

var Employee = mongoose.model('Employee',
{
    Name : {type:String},
    dob : {type:Date},
    Gender : {type:String},
    Salary : {type:Number},
},'Employee')

module.exports = { Employee}