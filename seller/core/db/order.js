const mongoose = require('mongoose')
const schema = mongoose.Schema

const order_schema = new schema({
   
        price: {
            type:Number,  
        },
        subprice: {
            type:Number,  
        },
        quantity: {
            type:Number,  
        },
        status: {
            type:String, default :'pending'
        },
    pickup_station: {
        item_delivered: {
            type:Boolean, default :false
        },
        adminid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'admin'
          }  
        },
        paid: {
            type:Boolean, default :'true'
        },
    
        sellerid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'seller'
        },
        customerid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'customer'
        },
        productid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'product'
        },
        orderid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'customer_order'
        },
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const sellerordermodel = mongoose.model('seller_order', order_schema )
module.exports = {
    sellerordermodel
}