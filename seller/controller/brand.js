

const createBrandController = async (req, res, next) => {
    const {
      productname,category,sellerid,
      productprice,
      productbrand,
      productimage,
      productnegiotable,
      productdescription,
    } = req.body;
    const name = productname.toLowerCase();
    const price = productprice;
    const brand = productbrand;
    const image = productimage;
    const negiotable = productnegiotable;
    const description = productdescription;
    try {
      const data = {
        name,
        price,
        brand,
        image,
        negiotable,
        description,category , sellerid
      };
  
      let trainee = await createProductModel(data, res);
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
  
  