const { CustomerModel } = require("../core/db/customer");
const { handleError } = require("../core/utils");
const {
  customeraddwishlistModel,
  customerremovewishlistModel,
  customerretrievewishlistModel,
} = require("../model/wishlist");

const customeraddwishlistController = async (req, res, next) => {
  const { customerid, productid } = req.body;
  try {
    const customer = await CustomerModel.findById(customerid);
    //lets do a check to ensure that the categories dont exist twice
    const customerwishlist = customer.wishlist;
    let checkwishlist = false;

    customerwishlist.map((x) => {
      if (x.productid == productid) {
        checkwishlist = true;
      }
    });

    if (checkwishlist) {
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "product already contained in wishlist",
      });
    }
    const data = {
      customerid,
      productid,
    };

    let trainee = await customeraddwishlistModel(data, res);
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


const customerremovewishlistController = async (req, res, next) => {
  const { customerid, productid } = req.body;
  try {
    const data = {
      customerid,
      productid,
    };

    let trainee = await customerremovewishlistModel(data, res);
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


const customerretrieveishlistController = async (req, res, next) => {
  const { customerid } = req.body;
  try {
    const data = {
      customerid,
     
    };

    let trainee = await customerretrievewishlistModel(data, res);
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
  customeraddwishlistController,
  customerremovewishlistController,
  customerretrieveishlistController,
};
