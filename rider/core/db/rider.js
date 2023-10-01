const mongoose = require('mongoose')
const schema = mongoose.Schema

const Riderschema = new schema({
 
        name: {
            type:String,
        },
        email: {
            type:String,
        },
        password:{
            type:String
        },
        phone:{
            type:String
        },
        photo:{
            type:String , default : ''
        },
        vehicle:{
            vehicle_number:{
                type:String , default : ''
            },
            vehicle_type:{
                type:String , default : ''
            },
        },
       
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const RiderModel = mongoose.model('rider', Riderschema )
module.exports = {
    RiderModel
}