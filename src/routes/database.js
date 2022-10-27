import mongoose from "mongoose";

// localhost: 127.0.0.1
const url = 'mongodb://localhost:27017/cafe-branch'

// pedirle a mongose que se conecte a la base de datos
mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('BD conectada')
})
