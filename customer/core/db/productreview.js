const mongoose = require('mongoose')
const schema = mongoose.Schema

const reviewschema = new schema({
 
        review: {
            type:String,
        },
        
        customerid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'customer'
        },
        productid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'product'
        },
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const productreviewModel = mongoose.model('productreview', reviewschema )
module.exports = {
    productreviewModel
}