const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ast_db',{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
})