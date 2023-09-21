const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const { SellerModel } = require("../core/db/seller");
const { sellerpasswordjwt, appPassword } = require("../../helper/utils");
const { SellerSignupModel, SellerLoginModel } = require("../model/auth");
const { handleError } = require("../core/utils");



const SellerSignupController = async (req, res, next) => {
  const {
    email,
    password,
    phone, name
    
  } = req.body;
  const sellerEmail = email.toLowerCase();
  try {
    const salt = await bcrypt.genSalt();
    const Harshpassword = await bcrypt.hash(password, salt);
    const seller = await SellerModel.findOne({ email: sellerEmail });
    if (seller) {
    
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "email already exist",
        data: [],
        error: "email already exist",
      });
    }

    const data = {
      sellerEmail,
      Harshpassword,
      phone, name
      
    };

    let trainee = await SellerSignupModel(data, res);
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


const SellerLoginController = async (req, res, next) => {
  const { email, password } = req.body;
  const sellerEmail = email.toLowerCase()
  console.log('email',sellerEmail)
  try {
    const sellerDetails = await SellerModel.findOne({ email: sellerEmail });
    if (!sellerDetails) {
   
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "user dont exist on our application",
        data: [],
        error: "user dont exist on our application",
      });
    }

    

    const checkPassword = await bcrypt.compare(password, sellerDetails.password);
    if (!checkPassword) {
  
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "incorrect password",
        data: [],
        error: "incorrect password",
      });
    }
    const data = {
      sellerEmail,
      password,
    };

    let trainee = await SellerLoginModel(data, res);

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


const SellerNewPasswordLink = async (req, res) => {
  const { email } = req.body;
  const useremail = email.toLowerCase()
  try {
    const client = await SellerModel.findOne({ email: useremail});
    if (!client) {

      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "incorrect email",
        error: "incorrect email",
      });
    }
    //function to generate token
    const secret = sellerpasswordjwt ;
    const payload = {
      email: useremail,
      id: client._id,
    };
    const token = jwt.sign(payload, secret, { expiresIn: "50m" });

    const link = `https://dev-myt-page.netlify.app/reset_password/?token=${token}`;

    //start of nodemailer
 var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'emmaroeneyoh@gmail.com',

    pass: appPassword,
  },
  tls: {
    rejectUnauthorized: false,
  },
 });
      
  var mailOptions = {
      from: 'emmaroeneyoh@gmail.com',
      to: `${email}`,
      subject: 'Nodemailer Project',
    text: `${token}`
      // html: data,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    //end of nodemailer
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "mail sent through",
      
      
    });
  } catch (error) {
    console.log(error);
  }
};


const SellerresetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;
    const verifiedToken = jwt.verify(token, sellerpasswordjwt);
    // console.log(verifiedToken.id)
    const id = verifiedToken.id;

    const salt = await bcrypt.genSalt();
    const Harshpassword = await bcrypt.hash(password, salt);
    const updateclient = await SellerModel.findByIdAndUpdate(id, {
      $set: {
        password : Harshpassword
      },
    });
  //   const datad = { notification: 'you have successfully updated your profile', traineeId }
  //   await notificationModel(datad)
    if (!updateclient) {
           
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "cant update password",
        error: "cant update password",
      });
    }
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "user password updated",
    });
  } catch (error) {
    console.log(error);
        
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: "token has expired",
      data: [],
      error: "token has expired",
    });
  }
};

module.exports = {
    SellerSignupController  , SellerLoginController , SellerNewPasswordLink  , SellerresetPassword 
}