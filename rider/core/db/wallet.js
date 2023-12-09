const mongoose = require('mongoose')
const schema = mongoose.Schema

const Wallet_schema = new schema({
 
        
        balance: {
            type:Number, default : 0
        },
        riderid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'rider'
        },
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const riderWalletModel = mongoose.model('riderWallet', Wallet_schema )
module.exports = {
    riderWalletModel
}