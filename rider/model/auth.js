const { RiderModel } = require("../core/db/rider");
const { riderWalletModel } = require("../core/db/wallet");
const { create_customer_token, create_rider_token } = require("../core/utils");

const RiderSignupModel = async (data, res) => {
  try {
    const {
      riderEmail,name,
      Harshpassword,
      
     
    } = data;
    const form = await new RiderModel ({
       name,
        email:riderEmail,
       password : Harshpassword,
    });
   
    const userDetails = await form.save()
      //create user wallet
      const wallet =   await new riderWalletModel({
        riderid : userDetails._id
        
      });
   const riderwallet = await wallet.save()
    const token = create_rider_token(userDetails._id);
    const userData = {
      id: userDetails._id,
      email: userDetails.email,
      token, name , riderwallet
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
    const token = create_rider_token(userDetails._id)
    const riderid = userDetails._id
    const riderwallet = await  riderWalletModel.findOne({riderid})
     const userData = {
         id: userDetails._id,
         name: userDetails.name,
         email: userDetails.email,
         token, riderwallet
      }
   
     return userData
  } catch (error) {
      return error.message
  }
     
}
 

const riderUpdatevehicleModel = async (data, res) => {
  try {
    const { vehicle_number , vehicle_type , riderid } = data;

    const form = await RiderModel.findByIdAndUpdate(riderid, {
      $set: {
        vehicle: {
          vehicle_number , vehicle_type
       }
      },
    });

    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const riderUpdatephotoModel = async (data, res) => {
  try {
    const { photo ,  riderid } = data;

    const form = await RiderModel.findByIdAndUpdate(riderid, {
      $set: {
       photo
      },
    });

    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

module.exports = {
  RiderSignupModel , RiderLoginModel , riderUpdatevehicleModel , riderUpdatephotoModel
}