const { CustomerModel } = require("../../customer/core/db/customer");
const { RiderModel } = require("../../rider/core/db/rider");

const Onlineuser = {};
const Offlineuser = {};
const Usertype = {};

//function to register logged in users to our logged in users
const registercustomer = (io) => {
    io.on('connection', (socket) => {
        console.log('customr socket', socket.id)
        
        //for customer
        //coonect after logged in or signup
        socket.on('registercustomer', async (data) => {
            console.log('checked now', data, socket.id)
            Onlineuser[data.userid] = socket.id;
            Usertype[data.userid] = 'customer';
            Offlineuser[socket.id] = data.userid;
            // const datavalue = JSON.stringify(data)
            //  update the database for user status from offline to online
            await CustomerModel.findByIdAndUpdate(data.userid, {
                $set: {
                  online_status: true,
                },
              });
        })
        //for rider
        //coonect after logged in or signup
        socket.on('registerdispatch', async (data) => {
            console.log('checked now', data, socket.id)
            Onlineuser[data.userid] = socket.id;
            Usertype[data.userid] = 'rider';
            Offlineuser[socket.id] = data.userid;
            // const datavalue = JSON.stringify(data)
            //  update the database for user status from offline to online
            await RiderModel.findByIdAndUpdate(data.userid, {
                $set: {
                  online_status: true,
                },
              });
        })


        //coonect after logged in or signup
        // socket.on('unregister', async (data) => {
        //     console.log('checked now' , data)
        //     // uncacheusers(data)
        //     await userModel.findByIdAndUpdate(data, {
        //         $set: {
        //           status: "offline",
        //         },
        //       });
        // })

        //after client ot server disconnects
        socket.on('disconnect', async() => {
            console.log('A client disconnected:', socket.id);
            const socketid = socket.id
            const userid = Offlineuser[socketid]
            const datatype = Usertype[userid]
            console.log(socketid , userid , datatype)
            
            if (datatype == 'customer') {
                 //update the user profile from the database
            await CustomerModel.findByIdAndUpdate(userid, {
                $set: {
                  online_status:false,
                },
              });
            } else if (datatype == 'seller') {
                
            } else if (datatype == 'rider') {
                
            }
           
          });
    })
}

module.exports = {
    registercustomer , Onlineuser 
}