const mongoose = require('mongoose')
const schema = mongoose.Schema

const order_schema = new schema({
 
        price: {
            type:Number,  
    },
    //this will be used by the user to confirm that the delivery arrived ,and also the time
        delivery: {
           confirm_delivery : {type : Boolean , default : false}  ,
           delivery_time : {type : String , default : ''}  
        },
        cart: [{
            price: {
                type:Number,  
            },
            subprice: {
                type:Number,  
            },
            quantity: {
                type:Number,  
            },
            sellerid: {
                type:  mongoose.Schema.Types.ObjectId,
                ref:'seller'
            },
            productid: {
                type:  mongoose.Schema.Types.ObjectId,
                ref:'product'
            },
        }],
        delivery_fee: {
            type:Number,  
    },
        //be used to track the product
        order_status: {
            type:String,   default :"pending"
    },
        
        //will be used by the admin when the products are complete in the pickupstation , when its true it goes to the dispatch
        order_complete: {
            type:Boolean,   default : false
    },
        delivery_vehicle: {
            type:String,  
    },
    shipping_address: {
        type:  mongoose.Schema.Types.ObjectId,
        ref:'customeraddress'
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
const customerordermodel = mongoose.model('customer_order', order_schema )
module.exports = {
    customerordermodel
}