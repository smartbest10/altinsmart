const { CategoryModel } = require("../../admin/core/db/category");
const { ProductModel } = require("../../seller/core/db/product");
const { SellerModel } = require("../../seller/core/db/seller");
const { CustomerModel } = require("../core/db/customer");
const { handleError } = require("../core/utils");
const { CustomermailsubscribtionModel } = require("../model/landingpage");

const retrievetopcatgeriesController = async (req, res, next) => {
  try {
    const categories = await CategoryModel.find().sort({
      product_purchased: -1,
    });
    const calender = new Date();
    const olddate = new Date(calender);
    // const year = calender.getFullYear()
    // const month = calender.getMonth()
    // const currrentdate = `${year}-${month}-25T15:27:03.146+00:00`
    const setdate = olddate.setDate(calender.getDate() - 1);
    const todaydeel = await CategoryModel.find({
      createdAt: {
        $gte: setdate,
      },
    });
    console.log("deal", setdate, todaydeel);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "categories successfully retrieved",
      data: categories,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message);
  }
};

const retrievetodaydealsController = async (req, res, next) => {
  try {
    const calender = new Date();
    const olddate = new Date(calender);
    const setdate = olddate.setDate(calender.getDate() - 1);
    const todaydeel = await CategoryModel.find({
      createdAt: {
        $gte: setdate,
      },
    });
    console.log("deal", setdate, todaydeel);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "categories successfully retrieved",
      data: categories,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message);
  }
};

const subscribemailnotificationController = async (req, res, next) => {
  const { email } = req.body;
  const customerEmail = email.toLowerCase();
  try {
    const customerDetails = await CustomerModel.findOne({
      email: customerEmail,
    });
    if (customerDetails) {
      return res.status(200).json({
        status_code: 200,
        status: false,
        message: "you have successfully subscribed to this mail",
      });
    }

    const data = {
      customerEmail,
    };

    let trainee = await CustomermailsubscribtionModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message);
  }
};

const retrievefeaturedshopController = async (req, res, next) => {
  try {
      const seller = await SellerModel.find().sort({ product_purchased: -1 }).limit(10).select('photo name')
      let store = []
      
      //retrieve products for the seller 
      const products = await ProductModel.find({ sellerid: seller }).select('name price')
      seller.map((item) => {
          let sellerproduct = []
          
        //   map through each product 
          products.map((prod) => {
              if (prod.sellerid == item._id) {
                  sellerproduct.push(prod)
              }
          })

        //   create an object with the seller details and seller product 
          const sellerstore = {
              storeowner : item ,  storeproduct : sellerproduct
          }

        //  push to the store variable 
          store.push(sellerstore)
      })

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "categories successfully retrieved",
      data: store,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message);
  }
};

module.exports = {
  retrievetopcatgeriesController,
  subscribemailnotificationController, retrievefeaturedshopController
};