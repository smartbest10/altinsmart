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
        kin:{
            kin_phone:{
                type:String , default : ''
            },
            kin_name:{
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