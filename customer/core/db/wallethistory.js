const mongoose = require('mongoose')
const schema = mongoose.Schema

const Wallet_schema = new schema({
 
        
        amount: {
            type:Number, default : 0
        },
        status: {
            type:Boolean , 
        },
        trx_type: {
            type:String, 
        },
        order: {
            order_pay: {
                type:Boolean , default :false
            }, 
            orderid: {
                type:String, default :' '
            }, 
        },
        customerid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'customer'
        },
        walletid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'customerWallet'
        },
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const wallethistoryModel = mongoose.model('customerwallethistory', Wallet_schema )
module.exports = {
    wallethistoryModel
}