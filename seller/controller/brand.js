// const { BrandModel } = require("../core/db/brand");
// const { handleError } = require("../core/utils");
// const { createBrandModel } = require("../model/brand");


// const createBrandController = async (req, res, next) => {
//     const {
//      sellerid ,  brandname
//     } = req.body;
//     const name = brandname.toLowerCase();
//     const brand = await BrandModel.findOne({ brandname: name });
//     if (brand) {
    
//       return res.status(400).json({
//         status_code: 400,
//         status: false,
//         message: "brand already exist",
//         data: [],
//         error: "brand already exist",
//       });
//     }

//     try {
//       const data = {
//         sellerid ,  name
//       };
  
//       let trainee = await createBrandModel(data, res);
//       return res.status(200).json({
//         status_code: 200,
//         status: true,
//         message: "signup process successful",
//         data: trainee,
//       });
//     } catch (error) {
//       console.log(error);
//       handleError(error.message)(res);
//     }
//   };
  
// const retrieveallBrandController = async (req, res, next) => {
//     const {
//      sellerid 
//     } = req.body;
//     const brand = await BrandModel.find({sellerid , brandApproved:true});
//     if (brand.length < 1) {
//         return res.status(400).json({
//             status_code: 400,
//             status: false,
//             message: "store has no brand or brand pending approval",
//           });
//    }
//     try {
//       return res.status(200).json({
//         status_code: 200,
//         status: true,
//         message: "signup process successful",
//         data: brand,
//       });
//     } catch (error) {
//       console.log(error);
//       handleError(error.message)(res);
//     }
//   };
  
// module.exports = {
//     createBrandController , retrieveallBrandController
//   }