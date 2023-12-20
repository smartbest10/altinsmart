const { SellerModel } = require("../core/db/seller");
const { sellerWalletModel } = require("../core/db/wallet");
const { create_seller_token } = require("../core/utils");


const SellerSignupModel = async (data, res) => {
  try {
    const {
      country,
      sellerEmail,
      Harshpassword,
      phone, name
     
    } = data;

    const form = await new SellerModel({
        country,
        email:sellerEmail,
       password: Harshpassword,
        phone, name
    });
    const userDetails = await form.save()
     //create user wallet
     const wallet =   await new sellerWalletModel({
      sellerid : userDetails._id
      
    });
   const sellerwallet =  await wallet.save()
    const token = create_seller_token(userDetails._id);
    const userData = {
      id: userDetails._id,
      email: userDetails.email,
      token, sellerwallet
    };

    return userData;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};



const SellerLoginModel = async (data,res) => {
  try {
    const {   sellerEmail, } = data
    const userDetails = await SellerModel.findOne({ email:   sellerEmail });
    const token = create_seller_token(userDetails._id)
    const sellerid = userDetails._id
    const sellerwallet =  await  sellerWalletModel.findOne({sellerid})
     const userData = {
         id: userDetails._id,
         email: userDetails.email,
         token, sellerwallet
      }
   
     return userData
  } catch (error) {
      return error.message
  }
     
 }
module.exports = {
    SellerSignupModel , SellerLoginModel
}