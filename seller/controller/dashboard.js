const { productquerymodel } = require("../../customer/core/db/product.query");
const { productreviewModel } = require("../../customer/core/db/productreview");
const { sellerordermodel } = require("../core/db/order");
const { ProductModel } = require("../core/db/product");
const { sellerWalletModel } = require("../core/db/wallet");
const { handleError } = require("../core/utils");

const SellerdashboardController = async (req, res, next) => {
  const { sellerid } = req.body;
  try {
    //total product
    const totalproduct = await ProductModel.countDocuments({ sellerid });
    //total order
    const totalorder = await sellerordermodel.countDocuments({ sellerid });
    //wallet
    const earning = await sellerWalletModel.find({ sellerid }).select('balance');
    //sales
    const soldproduct = await sellerordermodel.find({
      sellerid,
      status: "delivered",
    });
    const totalamount = soldproduct.map((x) => x.price);
    let sum = 0;

    for (let i = 0; i < totalamount.length; i++) {
      sum += totalamount[i];
    }
    const totalsales = sum;

    //top selling product
    const topsellingproduct = await ProductModel.find({ sellerid })
      .sort({ rating: 1 })
      .select("name images price rating");
    //recent order
    const recentorder = await sellerordermodel
      .find({ sellerid })
      .sort({ createdAt: -1 });
    //process order
    const processedorder = await sellerordermodel
      .countDocuments({ sellerid, status: "pending" })
     
    //confirm order
    const confirmorder = await sellerordermodel
      .countDocuments({ sellerid, status: "shipping" })
      
    //delivered order
    const deliveredorder = await sellerordermodel
      .countDocuments({ sellerid, status: "delivered" })
      

    const dashboarddata = {
      totalproduct,
      totalorder,
      earning,
 
      totalsales,
      topsellingproduct,
      recentorder,
      processedorder,
      confirmorder,
      deliveredorder,
    };

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: dashboarddata,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const SellerretrievereviewController = async (req, res, next) => {
  const { sellerid } = req.body;
  try {
    const review = await productreviewModel.find({ sellerid }).populate({
        path: 'customerid',
        select: 'name email phone' // Optional: Specify fields to include/exclude
      })
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: review,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const SellerretrievequeryController = async (req, res, next) => {
  const { sellerid } = req.body;
  try {
    const review = await productquerymodel.find({ sellerid }).populate([
        {
          path: 'productid',
          select: 'name rating'
        },
        {
          path: 'customerid',
          select: 'name'
        }
      ])
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: review,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  SellerretrievequeryController,
  SellerretrievereviewController, SellerdashboardController
};
