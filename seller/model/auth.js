const { SellerModel } = require("../core/db/seller");
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
    const token = create_seller_token(userDetails._id);
    const userData = {
      id: userDetails._id,
      email: userDetails.email,
      token,
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
     const userData = {
         id: userDetails._id,
         email: userDetails.email,
         token,
      }
   
     return userData
  } catch (error) {
      return error.message
  }
     
 }
module.exports = {
    SellerSignupModel , SellerLoginModel
}