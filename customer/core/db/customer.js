const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Customerschema = new schema({
  email: {
    type: String,
  },
  name: {
    type: String,
    default: "",
  },
  online_status: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  photo: {
    type: String,  default :""
  },
  country: {
    type: String,
  },

  default_address: {
    type: String, default :""
  },
  auth:{
    auth_token:{
        type:String , default : ''
    },
    auth_code:{
        type:String , default : ''
    },
},
  wishlist: {
    default: [],
    type: [
      {
        productid: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
        },
      },
    ],
  },
  followed_store: {
    default: [],
    type: [
      {
        storeid: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "seller",
        },
      },
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const CustomerModel = mongoose.model("customer", Customerschema);
module.exports = {
  CustomerModel,
};
