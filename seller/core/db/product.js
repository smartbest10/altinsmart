const mongoose = require('mongoose')
const schema = mongoose.Schema

const Productschema = new schema({
 
        name: {
            type:String,
        },
        price:{
            type:Number
        },
        brand:{
            type:  mongoose.Schema.Types.ObjectId,
            ref:'brand'
        },
        category:{
            type:  mongoose.Schema.Types.ObjectId,
            ref:'category'
        },
        sellerid: {
            type:  mongoose.Schema.Types.ObjectId,
             ref:'Seller'
        },
        image:{
            type:String
        },
        description:{
            type:String
        },
        negiotable:{
            type:Boolean , default : false
        },
        productApproved:{
            type:Boolean , default : false
        },
       
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const ProductModel = mongoose.model('Product', Productschema )
module.exports = {
    ProductModel
}