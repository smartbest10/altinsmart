const mongoose = require('mongoose')
const schema = mongoose.Schema

const post_schema = new schema({
    
   type: {
        type:String, //string or text
        
    },
   message: {
        type:String,
        
    },
    users: Array,
    sender: {
        type:String
    },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const sellerdispatchModel = mongoose.model('seller_dispatch', post_schema)
module.exports = {
    sellerdispatchModel
}