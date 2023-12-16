const mongoose = require('mongoose')
const schema = mongoose.Schema

const post_schema = new schema({
    
   type: {
        type:String, //string or text
    },
   message: {
        type:String,
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
const ridersupporthModel = mongoose.model('rider_support', post_schema)
module.exports = {
    ridersupporthModel
}