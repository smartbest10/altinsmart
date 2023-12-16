const express = require("express");
//using the env
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const { coonectdb } = require("./helper/conectdb");
const cors = require("cors");
const app = express();
//socket connection 
const http = require("http").Server(app);
const io = require("socket.io")(http,  {
    pingInterval: 15000, // Ping every 15 seconds
    pingTimeout: 30000,  // Wait 30 seconds for the client to respond to pings
  });
const { PORT } = require("./helper/utils")

//for customer
const customerauth = require('./customer/route/auth')
const customerprofile = require('./customer/route/profile')
const customerlandingpage = require('./customer/route/landingpage')
const customerproductrelated = require('./customer/route/productrelated')
const customeraddress = require('./customer/route/address')
const customercard = require('./customer/route/card')
const customerorder = require('./customer/route/order')
const customerwallet = require('./customer/route/wallet')

// for seller 
const sellerauth = require('./seller/route/auth')
const sellerproduct = require('./seller/route/product');
const sellerprofile = require('./seller/route/profile');
const sellerorder = require('./seller/route/order');
const sellerwallet = require('./seller/route/wallet');
const sellerdashboard = require('./seller/route/dashboard');
// const sellerbrand = require('./seller/route/brand');
;



// for admin 
const adminauth = require('./admin/route/auth')
const admincategory = require('./admin/route/category')
const adminseller = require('./admin/route/seller')
const admincustomer = require('./admin/route/customer')
const adminbrand = require('./admin/route/brand')
const adminlandingpage = require('./admin/route/landingpage')


// for admin 
const riderauth = require('./rider/route/auth')
const riderprofile = require('./rider/route/profile')
const riderorder = require('./rider/route/order')
const riderwallet = require('./rider/route/rider');
const { registercustomer } = require("./websocket/customer/auth.socket");
const { chatuser } = require("./websocket/customer/chat.socket");


//connecting the database
coonectdb();

app.use(cors());
//applying our middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const customer = '/customer'
const seller = '/seller'
const admin = '/admin'
const rider = '/rider'
//for customer
app.use(customer, customerauth)
app.use(customer, customerprofile)
app.use(customer, customerlandingpage)
app.use(customer, customerproductrelated)
app.use(customer, customeraddress)
app.use(customer, customercard)
app.use(customer, customerorder)
app.use(customer, customerwallet)


//for seller
app.use(seller, sellerauth)
app.use(seller, sellerproduct)
app.use(seller, sellerprofile)
app.use(seller, sellerorder)
app.use(seller, sellerwallet)
app.use(seller, sellerdashboard)
// app.use(seller, sellerbrand)


//for admin
app.use(admin, adminauth)
app.use(admin, admincategory)
app.use(admin, adminseller)
app.use(admin, admincustomer)
app.use(admin, adminlandingpage)
app.use(admin, adminbrand)


//for admin
app.use(rider, riderauth)
app.use(rider, riderprofile)
app.use(rider, riderorder)
app.use(rider, riderwallet)





//error handler
app.use((req, res, next) => {
  const error = new Error("api not found");
  error.status = 404;
  res.status(404).json({
    status_code: 404,
    status: false,
    message: error.message,
    data: [],
    error: error.message,
  });
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.status(500).json({
    status_code: 500,
    status: false,
    message: error.message,
    data: [],
    error: error.message,
  });
});

const port = PORT || 3000;

http.listen(port, () => console.log("coonected"));
registercustomer(io)
chatuser(io)
// app.listen(port, () => {
//   console.log("server connected", port);
// });
