const { CustomerModel } = require("../core/db/customer");
const { RiderModel } = require("../core/db/rider");
const { create_customer_token, create_rider_token } = require("../core/utils");

const RiderSignupModel = async (data, res) => {
  try {
    const {
      riderEmail,name,
      Harshpassword,
      phone,
     
    } = data;
    const form = await new RiderModel ({
       name,
        email:riderEmail,
       password : Harshpassword,
        phone,
    });
   
    const userDetails = await form.save()
    const token = create_rider_token(userDetails._id);
    const userData = {
      id: userDetails._id,
      email: userDetails.email,
      token, name
    };

    return userData;
  } catch (error) {
    console.log('error' , error);
    return error.message;
   
  }
};



const RiderLoginModel = async (data,res) => {
  try {
    const { riderEmail, } = data
     const userDetails = await RiderModel.findOne({ email:riderEmail});
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