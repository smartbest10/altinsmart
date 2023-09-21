const mongoose = require('mongoose')
const schema = mongoose.Schema

const Vehicleschema = new schema({
 
        vehicle_type: {
            type:String,
        },
        plate_number: {
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
const VehicleModel = mongoose.model('vehicle', Vehicleschema )
module.exports = {
    VehicleModel
}