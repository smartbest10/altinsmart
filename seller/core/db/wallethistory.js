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
       
        sellerid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'Seller'
        },
        walletid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'sellerWallet'
        },
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const sellerwallethistoryModel = mongoose.model('sellerwallethistory', Wallet_schema )
module.exports = {
    sellerwallethistoryModel
}