const mongoose = require('mongoose')
const schema = mongoose.Schema

const reviewschema = new schema({
 
        review: {
            type:String,
        },
        rating: {
            type:String,
        },
        
        sellerid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'Seller'
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