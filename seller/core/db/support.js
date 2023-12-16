const mongoose = require('mongoose')
const schema = mongoose.Schema

const post_schema = new schema({
    
   type: {
        type:String, //string or text
    },
   message: {
        type:String,
    },
    sellerid: {
        type:  mongoose.Schema.Types.ObjectId,
        ref:'Seller'
    },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const sellersupporthModel = mongoose.model('seller_support', post_schema)
module.exports = {
    sellersupporthModel
}