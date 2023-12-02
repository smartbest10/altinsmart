const mongoose = require('mongoose')
const schema = mongoose.Schema

const order_schema = new schema({
    
        customerorderid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'customer_order'
        },
        order_taken: {
            type:  Boolean,
            default : false
        },
        order_riderid: {
            type:  String,
            default : ''
        },
        admin_approved: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'admin'
        },
        
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const dispatchlistmodel = mongoose.model('dispatch_list', order_schema )
module.exports = {
    dispatchlistmodel
}