const mongoose = require('mongoose')

const Dishes = require('../teebeesServer/models/dishes')

const url= 'mongodb://localhost:27017/teebees_clothing'
const connect= mongoose.connect(url, {useNewUrlParser: true});

connect.then((db)=>{
    console.log('connected correctly to server')

    Dishes.create({
        name:'Uthapizza',
        description:'test'
        
    })
    .then((dish)=>{
        console.log(dish);
        return Dishes.find({}).exec()
    }).then((dishes)=>{
        console.log(dishes)
        return Dishes.remove()
    }).then(()=>{
        return mongoose.connection.close()
    }).catch((err)=>{console.log(err)})
}).catch((err)=>{console.log(err)})