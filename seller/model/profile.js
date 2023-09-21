const { SellerModel } = require("../core/db/seller");

const Sellerupdateprofile1Model = async (data, res) => {
  try {
    const { sellerEmail, biography, phone, name, sellerid } = data;

    const form = await SellerModel.findByIdAndUpdate(sellerid, {
      $set: {
        email: sellerEmail,
        phone,
        name,
        biography,
      },
    });

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const SellerupdatephotoModel = async (data, res) => {
  try {
    const { photo, sellerid } = data;

    const form = await SellerModel.findByIdAndUpdate(sellerid, {
      $set: {
        photo,
      },
    });

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const Sellerupdateprofile2Model = async (data, res) => {
  try {
    const { page_per_view, term_and_condition, public_visitibilty, sellerid } =
      data;

    const form = await SellerModel.findByIdAndUpdate(sellerid, {
      $set: {
        store_overview: {
          page_per_view,
          term_and_condition,
          public_visitibilty,
        },
      },
    });

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

const Sellerupdateprofile3Model = async (data, res) => {
  try {
    const {
      bussiness_name,
      address_one,
      address_two,
      city,
      state,
      country,
      map_location,
      sellerid,
    } = data;

    const form = await SellerModel.findByIdAndUpdate(sellerid, {
      $set: {
        store_address: {
          bussiness_name,
          address_one,
          address_two,
          city,
          state,
          country,
          map_location,
        },
      },
    });

    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const SelleraddcategoryModel = async (data, res) => {
  try {
      const { sellerid, categoryid } = data;
      let categoryAdded
    //   checking if the seller has this category already 
    const seller = await SellerModel.findById(sellerid)
      const sellercategory = seller.store_category
      const category = sellercategory.find(x => x.categoryid === categoryid) 
      if (category) {
          categoryAdded = false
          return categoryAdded
      }
    const form = await SellerModel.findByIdAndUpdate(sellerid, {
      $push: {
        store_category: {
          categoryid: categoryid,
        },
      },
    });
    categoryAdded =  true
    return categoryAdded;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const SelleraddaccountModel = async (data, res) => {
  try {
      const { sellerid , account_type , account_url } = data;
    const form = await SellerModel.findByIdAndUpdate(sellerid, {
      $push: {
        social_account: {
            account_type , account_url
        },
      },
    });
    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};
const SellerdeleteaccountModel = async (data, res) => {
  try {
      const { sellerid , account_type , account_url , accountid } = data;
   
    const form = await SellerModel.findByIdAndUpdate(sellerid, {
        $pull : {
            store_account:{
                _id : dependentId
            }
        }
    });
    return form;
  } catch (error) {
    console.log(error);
    return error.message;
    // handleError(error.message)(res)
  }
};

module.exports = {
  Sellerupdateprofile1Model,
  SellerupdatephotoModel,
  Sellerupdateprofile2Model,
  Sellerupdateprofile3Model, SelleraddcategoryModel , SelleraddaccountModel
};
