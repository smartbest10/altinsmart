const mongoose = require('mongoose')
const schema = mongoose.Schema

const Customerschema = new schema({
 
        email: {
            type:String,
        },
        name: {
            type:String, default :''
        },
        password:{
            type:String
        },
        phone:{
            type:String
        },
        country:{
            type:String
        },
       
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const CustomerModel = mongoose.model('customer', Customerschema )
module.exports = {
    CustomerModel
}