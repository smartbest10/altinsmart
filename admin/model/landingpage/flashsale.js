const { flashsalemodel } = require("../../core/db/landingpage/flashsale");



const adminaddflashsaleModel = async (data, res) => {
    try {
      const {
        productid
      } = data;
  
      const form = await new flashsalemodel({
          productid
      });
      const userDetails = await form.save()
     ;
  
      return userDetails;
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
};
  
const admindeletefeaturedshopModel = async (data, res) => {
    try {
      const {
        sellerid
      } = data;
  
      const form = await new featuredshopmodel.findByIdAndDelete(sellerid);
     ;
  
      return form;
    } catch (error) {
      console.log(error);
      return error.message;
      // handleError(error.message)(res)
    }
  };
  
module.exports = {
    adminaddflashsaleModel
  }