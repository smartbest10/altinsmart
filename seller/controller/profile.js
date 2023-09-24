const { SellerModel } = require("../core/db/seller");
const { handleError } = require("../core/utils");
const {
  Sellerupdateprofile1Model,
  Sellerupdateprofile3Model,
  SelleraddcategoryModel,
  SelleraddaccountModel,
  SellerupdatephotoModel,
  Sellerupdateprofile2Model,
  SelleraddbrandModel,
} = require("../model/profile");

const Sellerupdateprofile1Controller = async (req, res, next) => {
  const { email, biography, phone, name, sellerid } = req.body;
  const sellerEmail = email.toLowerCase();
  try {
    const seller = await SellerModel.findOne({ email: sellerEmail });
    console.log(seller._id, sellerid);
    if (seller._id != sellerid) {
      return res.status(200).json({
        status_code: 400,
        status: true,
        message: "email already exist",
        error: "email already exist",
      });
    }

    const data = {
      sellerEmail,
      biography,
      phone,
      name,
      sellerid,
    };

    let trainee = await Sellerupdateprofile1Model(data, res);
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

const SellerupdatephotoController = async (req, res, next) => {
  const { photo, sellerid } = req.body;
  try {
    const data = {
      photo,
      sellerid,
    };

    let trainee = await SellerupdatephotoModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message);
  }
};

const Sellerupdateprofile2Controller = async (req, res, next) => {
  const { page_per_view, term_and_condition, public_visitibilty, sellerid } =
    req.body;
  try {
    const data = {
      page_per_view,
      term_and_condition,
      public_visitibilty,
      sellerid,
    };

    let trainee = await Sellerupdateprofile2Model(data, res);
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

const Sellerupdateprofile3Controller = async (req, res, next) => {
  const {
    bussiness_name,
    address_one,
    address_two,
    city,
    state,
    country,
    map_location,
    sellerid,
  } = req.body;
  try {
    const data = {
      bussiness_name,
      address_one,
      address_two,
      city,
      state,
      country,
      map_location,
      sellerid,
    };

    let trainee = await Sellerupdateprofile3Model(data, res);
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

const SelleraddcategoryController = async (req, res, next) => {
  const { sellerid, category } = req.body;
  try {
    const seller = await SellerModel.findById(sellerid);
    //lets do a check to ensure that the categories dont exist twice
    const sellercategory = seller.store_category;
    let newcategory = [];
    let existcategory = [];
    category.forEach((x) => {
      const checkcategory = sellercategory.find(
        (item) => item.categoryid == x.categoryid
      );
      console.log("true", checkcategory);
      if (checkcategory) {
        existcategory.push(x);
      } else {
        newcategory.push(x);
      }
    });

    console.log("exist category", existcategory);
    const data = {
      sellerid,
      newcategory,
    };

    let trainee = await SelleraddcategoryModel(data, res);
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
const SelleraddbrandController = async (req, res, next) => {
  const { sellerid, brand } = req.body;
  try {
    const seller = await SellerModel.findById(sellerid);
    //lets do a check to ensure that the categories dont exist twice
    const sellerbrand = seller.store_brand;
    let newbrand = [];
    let existbrand = [];
    brand.forEach((x) => {
      const checkbrand = sellerbrand.find((item) => item.brandid == x.brandid);
      console.log("true", checkbrand);
      if (checkbrand) {
        existbrand.push(x);
      } else {
        newbrand.push(x);
      }
    });

    console.log("exist brand", existbrand);
    const data = {
      sellerid,
      newbrand,
    };

    let trainee = await SelleraddbrandModel(data, res);
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

const SelleraddsocialaccountController = async (req, res, next) => {
  const { sellerid, account_type, account_url } = req.body;
  try {
    const seller = await SellerModel.findById(sellerid);
    const selleraccount = seller.social_account;
    const account = selleraccount.find((x) => x.account_type === account_type);
    if (account) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: `${account_type} account already exist`,
        error: `${account_type} account already exist`,
      });
    }
    const data = {
      sellerid,
      account_type,
      account_url,
    };

    let trainee = await SelleraddaccountModel(data, res);
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
const SellerdeletesocialaccountController = async (req, res, next) => {
  const { sellerid, account_type, account_url, accountid } = req.body;
  try {
    const data = {
      sellerid,
      account_type,
      account_url,
      accountid,
    };

    let trainee = await SelleraddaccountModel(data, res);
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
  Sellerupdateprofile1Controller,
  SellerupdatephotoController,
  Sellerupdateprofile2Controller,
  SelleraddsocialaccountController,
  SelleraddsocialaccountController,
  SelleraddcategoryController,
  Sellerupdateprofile3Controller, SelleraddbrandController
};
