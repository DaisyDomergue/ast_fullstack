require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var Employees = require('./controllers/EmployeesController')


var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.listen(5000,()=>console.log('Server started at : 5000'))


app.use('/employees',Employees)