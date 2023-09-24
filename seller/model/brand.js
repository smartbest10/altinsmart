// const { BrandModel } = require("../core/db/brand");


// const createBrandModel = async (data, res) => {
//     try {
//       const {
      
//           name , sellerid
//       } = data;
  
//       const form = await new BrandModel({
//         brandname:name , sellerid
//       });
//       const productDetails = await form.save()
  
//       return productDetails;
//     } catch (error) {
//       console.log(error);
//       return error.message;
//       // handleError(error.message)(res)
//     }
// };
  

// module.exports = {
//     createBrandModel
// }