const mongoose = require('mongoose');
const conn = async (req, res) =>{
    try{
        await mongoose.connect('mongodb+srv://hansraj:hansraj@cluster0.a4lq642.mongodb.net/')
    .then(()=>{
        console.log('Database connected');
    });
    } catch(err){
        res.status(400).json({message: 'Not Connected'})
    }
}

conn();