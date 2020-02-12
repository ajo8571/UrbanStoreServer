const mongoose=require('mongoose')
const Schema=mongoose.Schema
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency

const dishSchema= new Schema({
    name:{
        type: String,
        required: true,
        unique:true 
    },
    description:{
        type: String,
        unique:true
    },
    image:{
        type: String,
        require:true 
    },
    price:{
        type: Currency,
        required: true
    },
    category:{
        type: String,
        required:true,
        min:0
    },
    featured:{
        type: Boolean,
        default: false
    },
    gender:{
        type:String,
        required:true 
    },
    brand:{
        type: String 
    }
})

var Dishes=mongoose.model('Dish',dishSchema)

module.exports = Dishes;
