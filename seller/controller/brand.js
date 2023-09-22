const { BrandModel } = require("../core/db/brand");
const { createBrandModel } = require("../model/brand");


const createBrandController = async (req, res, next) => {
    const {
     sellerid ,  brandname
    } = req.body;
    const name = brandname.toLowerCase();
    const brand = await BrandModel.findOne({ brandname: name });
    if (brand) {
    
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "brand already exist",
        data: [],
        error: "brand already exist",
      });
    }

    try {
      const data = {
        sellerid ,  name
      };
  
      let trainee = await createBrandModel(data, res);
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
  
module.exports = {
    createBrandController
  }