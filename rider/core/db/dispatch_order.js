const mongoose = require('mongoose')
const schema = mongoose.Schema

const order_schema = new schema({
    
        riderid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'rider'
        },
        customerorderid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'customer_order'
        },
        delivery_fee: {
            type:  Number,
        },
        order_status: {
            type:  String,
            default : 'pending'
        },
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const dispatchordermodel = mongoose.model('dispatch_order', order_schema )
module.exports = {
    dispatchordermodel
}