const mongoose = require('mongoose')
const schema = mongoose.Schema

const Sellerschema = new schema({

    storeprofile1: {
        type:Boolean, default : false
    },
 
        email: {
            type:String,
        },
        password:{
            type:String
        },
        phone:{
            type:String
        },
        country:{
            type:String , default : ''
        },
        biography:{
            type:String , default : ''
        },
        photo:{
            type:String , default : ''
        },
       
        name:{
            type:String
    },
    
    storeprofile2: {
        type:Boolean, default : false
    },
    store_overview:{
            page_per_view: {
                type:Number, default : 0
            },
            term_and_condition: {
                type:String, default : ''
            },
            public_visitibilty: {
                type:String, default : ''
            }
    },
    storeprofile3: {
        type:Boolean, default : false
    },
        store_address:{
            bussiness_name: {
                type:String, default : ''
            },
           
            address_one: {
                type:String, default : ''
            },
            address_two: {
                type:String, default : ''
            },
            city: {
                type:String, default : ''
            },
            state: {
                type:String, default : ''
            },
            country: {
                type:String, default : ''
            },
            map_location: {
                type:String, default : ''
            },
        
    },
    storeprofile4: {
        type:Boolean, default : false
    },
    store_category: {
        default: [],
        type: [
            {
               
                categoryid: {
                    type:  mongoose.Schema.Types.ObjectId,
                    ref:'category'
                }
            }
        ]
    },
    social_account: {
        default: [],
        type: [
            {
               
                account_type: {
                    type: String
                },
                account_url: {
                    type: String
                }
            }
        ]
    },
       
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const SellerModel = mongoose.model('Seller', Sellerschema )
module.exports = {
    SellerModel
}