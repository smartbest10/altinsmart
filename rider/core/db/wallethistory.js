const mongoose = require('mongoose')
const schema = mongoose.Schema

const Wallet_schema = new schema({
 
        amount: {
            type:Number, default : 0
        },
        trx_type: {
            type:String , 
        },
        status: {
            type:Boolean , 
        },
       
        riderid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'rider'
        },
        walletid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'riderWallet'
        },
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const riderwallethistoryModel = mongoose.model('riderwallethistory', Wallet_schema )
module.exports = {
    riderwallethistoryModel
}