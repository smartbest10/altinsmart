const { RiderModel } = require("../core/db/rider");


const riderretrieveprofileController = async (req, res, next) => {
    const { riderid } = req.body;
    try {
      const rider = await RiderModel.findById(riderid);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "rider successfully retrieved",
        data: rider,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };
  
  const CustomerupdateprofileController = async (req, res, next) => {
    const { country, email, phone, name, customerid } = req.body;
    const customerEmail = email.toLowerCase();
    //check if the email exist already , by confirming if the xist email belongs to the current user
  
    const customer = await CustomerModel.findOne({ email: customerEmail });
    if (customer._id != customerid) {
      return res.status(200).json({
        status_code: 400,
        status: true,
        message: "email already exist",
        error: "email already exist",
      });
    }
    try {
      const data = {
        customerEmail,
        country,
        customerid,
        phone,
        name,
      };
  
      let trainee = await CustomerUpdateprofileModel(data, res);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };