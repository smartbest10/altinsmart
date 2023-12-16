// const { CustomerModel } = require("../../customer/core/db/customer")

// const Onlineriders = {};
// const Offlineriders = {};

// //function to register logged in users to our logged in users
// const registerrider = (io) => {
//     io.on('connection', (socket) => {
//         console.log('rider socket', socket.id)
        
//         //coonect after logged in or signup
//         socket.on('registerrider', async (data) => {
//             console.log('checked now', data, socket.id)
//             Onlineriders[data.riderid] = socket.id;
//             Offlineriders[socket.id] = data.riderid;
//             console.log('online users' , Onlineriders)
//             // const datavalue = JSON.stringify(data)
//             //  update the database for user status from offline to online
//             await riderModel.findByIdAndUpdate(data.riderid, {
//                 $set: {
//                   online_status: true,
//                 },
//               });
//         })


//         //coonect after logged in or signup
//         // socket.on('unregister', async (data) => {
//         //     console.log('checked now' , data)
//         //     // uncacheusers(data)
//         //     await userModel.findByIdAndUpdate(data, {
//         //         $set: {
//         //           status: "offline",
//         //         },
//         //       });
//         // })

//         //after client ot server disconnects
//         socket.on('disconnect', async() => {
//             console.log('A client disconnected:', socket.id);
//             const userid = socket.id
//             const data = Offlineriders.userid
//             console.log('this is offline client', data)
//             //update the user profile from the database
//             await riderModel.findByIdAndUpdate(userid, {
//                 $set: {
//                   online_status:false,
//                 },
//               });
//           });
//     })
// }

// module.exports = {
//     registerrider
// }