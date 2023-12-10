const { CustomerModel } = require("../core/db/customer");
const { WalletModel } = require("../core/db/wallet");
const { create_customer_token } = require("../core/utils");

const CustomerSignupModel = async (data, res) => {
  try {
    const {
      country,
      customerEmail,
      Harshpassword,
      phone,
     
    } = data;
    const form = await new CustomerModel ({
        country,
        email:customerEmail,
       password : Harshpassword,
        phone,
    });
   
    const userDetails = await form.save()
    //create user wallet
    const wallet =   await new WalletModel ({
      customerid : userDetails._id
      
    });
   const userwallet =   await wallet.save()
    const token = create_customer_token(userDetails._id);
    const userData = {
      id: userDetails._id,
      email: userDetails.email,
      token, userwallet
    };

    return userData;
  } catch (error) {
    console.log('error' , error);
    return error.message;
   
  }
};



const CustomerLoginModel = async (data,res) => {
  try {
    const { customerEmail, } = data
     const userDetails = await CustomerModel.findOne({ email:customerEmail});
     const token = create_customer_token(userDetails._id)
     const userData = {
         id: userDetails._id,
         name: userDetails.name,
         email: userDetails.email,
         token,
      }
   
     return userData
  } catch (error) {
      return error.message
  }
     
 }
module.exports = {
    CustomerSignupModel , CustomerLoginModel
}