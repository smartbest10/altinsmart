const mongoose = require('mongoose')
const schema = mongoose.Schema

const categoryschema = new schema({
 
        category: {
            type:String,
        },
   
        category_description: {
            type:String,
        },
        category_image: {
            type:String,
        },
        product_purchased: {
            type:Number, default:0
        },
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})


const CategoryModel = mongoose.model('category', categoryschema )
module.exports = {
    CategoryModel
}