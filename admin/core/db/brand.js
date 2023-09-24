const mongoose = require('mongoose')
const schema = mongoose.Schema

const brandschema = new schema({
 
        
        brand:{
            type:String
        },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const BrandModel = mongoose.model('brand', brandschema )
module.exports = {
    BrandModel
}