const mongoose = require('mongoose')
const schema = mongoose.Schema

const Wallet_schema = new schema({
 
        
        balance: {
            type:Number, default : 0
        },
        sellerid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'Seller'
        },
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const sellerWalletModel = mongoose.model('sellerWallet', Wallet_schema )
module.exports = {
    sellerWalletModel
}