const mongoose = require('mongoose')
const schema = mongoose.Schema

const Productschema = new schema({
 
        name: {
            type:String,
        },
        price:{
            type:Number
        },
        quantity:{
            type:Number
        },
        dimension:{
            length:{
                type:Number
            },  
            breadth:{
                type:Number
            },
            height:{
                type:Number
            },
            area:{
                type:Number
            },
            weight:{
                type:Number
            },
        },
        brand:{
            type:  mongoose.Schema.Types.ObjectId,
            ref:'brand'
        },
        category:{
            type:  mongoose.Schema.Types.ObjectId,
            ref:'category'
        },
        sellerid: {
            type:  mongoose.Schema.Types.ObjectId,
             ref:'Seller'
        },
        images: {
            default: [],
            type: [
                {
                   
                    image: {
                        type:  String,
                        ref:'brand'
                    }
                }
            ]
        },
        description:{
            type:String
        },
        negiotable:{
            type:Boolean , default : false
        },
        discount:{
            isdiscount:{
                type:Boolean , default : false
            }, 
            discount_price:{
                type:Number , default : 0
            }, 
            discount_startdate:{
                type:String , default : ''
            }, 
            discount_enddate:{
                type:String , default : ''
            }, 
        },
        productApproved:{
            type:Boolean , default : false
        },
       
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const ProductModel = mongoose.model('Product', Productschema )
module.exports = {
    ProductModel
}