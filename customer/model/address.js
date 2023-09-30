const { AddressModel } = require("../core/db/address");
const { CustomerModel } = require("../core/db/customer");



const customercreateaddressModel = async (data, res) => {
    try {
      const {
        customerid,
        address , postalcode , country , state , city
      } = data;
      const form = await new AddressModel({
        customerid,
        address , postalcode , country , state , city
      });
     
      const useraddress  = await form.save()
      //checking if the user has a default address
        const customer = await CustomerModel.findById(customerid)
        const customeraddress = customer.default_address
        if (!customeraddress) {
            const updateaddress = await CustomerModel.findByIdAndUpdate(customerid, {
                $set: {
                default_address:useraddress._id
                },
              });
        }
  
      return useraddress;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
  };
const customerupdateaddressModel = async (data, res) => {
    try {
      const {
        addressid,
        address , postalcode , country , state , city
      } = data;
      const updateaddress = await AddressModel.findByIdAndUpdate(addressid, {
        $set: {
            address , postalcode , country , state , city
        },
      });
      return updateaddress;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
  
const customersetdefaultaddressModel = async (data, res) => {
    try {
      const {
        addressid , customerid 
      } = data;
      const updateaddress = await CustomerModel.findByIdAndUpdate(customerid, {
        $set: {
            default_address: addressid
        },
      });
      return updateaddress;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
  

module.exports = {
    customercreateaddressModel  , customerupdateaddressModel , customersetdefaultaddressModel
  }