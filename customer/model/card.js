const { CardModel } = require("../core/db/card");
const { encryptcard } = require("../core/utils");


const customercreatecardModel = async (data, res) => {
    try {
      const {   customerid,
        encyrptnumber , encyrptcvv , card_name , expire_date } = data;
      const form = await new CardModel({
        customerid,
        card_cvv:encyrptcvv ,
        card_name , card_number: encyrptnumber ,
        expire_date 
      });
  
      const useraddress = await form.save();
      return useraddress;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
}
    ;
  const customerupdatecardModel = async (data, res) => {
    try {
      const {   encyrptnumber,
        encyrptcvv,
        card_name,
        expire_date, cardid } = data;
      const updateaddress = await CardModel.findByIdAndUpdate(cardid, {
        $set: {
            card_cvv:encyrptcvv ,
            card_name , card_number: encyrptnumber ,
            expire_date 
        },
      });
      return updateaddress;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
};
  

module.exports = {
    customercreatecardModel ,  customerupdatecardModel
}