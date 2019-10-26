
const mongoose = require('mongoose');

 

mongoose.connect('mongodb+srv://MacDonald:mac123@cluster0-tenpe.mongodb.net/test?retryWrites=true&w=majority')
    .then(db => console.log("DB conectada"))
    .catch(err => console.log(err));
   

