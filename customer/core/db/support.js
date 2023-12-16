const mongoose = require('mongoose')
const schema = mongoose.Schema

const post_schema = new schema({
    
   type: {
        type:String, //string or text
    },
   message: {
        type:String,
    },
    customerid: {
        type:  mongoose.Schema.Types.ObjectId,
        ref:'customer'
    },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const customersupporthModel = mongoose.model('customer_support', post_schema)
module.exports = {
    customersupporthModel
}