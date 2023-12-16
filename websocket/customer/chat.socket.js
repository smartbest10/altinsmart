
// used in redis string, we just store the group chat id as a string , message sender , and the group id .

const { customerdispatchModel } = require("../../customer/core/db/chat")
const { customersupporthModel } = require("../../customer/core/db/support")
const { ridersupporthModel } = require("../../rider/core/db/support")
const { sellerdispatchModel } = require("../../seller/core/db/chat")
const { sellersupporthModel } = require("../../seller/core/db/support")
const { Onlineuser } = require("./auth.socket")


//function to register logged in users to our logged in users
const chatuser = (io) => {
    io.on('connection', (socket) => {
        console.log('socket id', socket.id)
        
        //coonect after logged in or signup
        socket.on('recieve_customer_dispatch', async (data) => {
            console.log('chat now')
           
            //send user chat
            const sender = data.sender 
            const type = data.type 
            const reciever = data.reciever
            const message = data.message
            const date = Date.now()
            // const datavalue = { sender, message, date }
            // const realdata = JSON.stringify(datavalue)
            // const key = `${sender}-${friend}`
            // cachechat(key, realdata)

            const talk = await new customerdispatchModel({
                users: [sender,reciever],
                message: message,
                sender: sender, type
            });
            const chat = await talk.save()
            const socketid = await Onlineuser[reciever]
            io.to(socketid).emit('send_customer_dispatch', chat)
        })

        //for seller dispatch chat
        socket.on('recieve_seller_dispatch', async (data) => {
            console.log('chat now')
           
            //send user chat
            const sender = data.sender 
            const type = data.type 
            const reciever = data.reciever
            const message = data.message
            const date = Date.now()
            // const datavalue = { sender, message, date }
            // const realdata = JSON.stringify(datavalue)
            // const key = `${sender}-${friend}`
            // cachechat(key, realdata)

            const talk = await new sellerdispatchModel({
                users: [sender,reciever],
                message: message,
                sender: sender, type
            });
            const chat = await talk.save()
            const socketid = await Onlineuser[reciever]
            io.to(socketid).emit('send_seller_dispatch', chat)
        })
        

        //for customer support
        socket.on('recieve_customer_support', async (data) => {
            console.log('customer support')
            //send user chat
            const sendertype =  data.sendertype
            const sender = data.sender 
            const type = data.type 
            const customerid = data.customerid
            const message = data.message
            const talk = await new customersupporthModel({
                message: message,
                sender: sender, type , customerid
            });
            const chat = await talk.save()
            const socketid = await Onlineuser[customerid]
            if (sendertype == 'admin') {
                io.to(socketid).emit('send_customer_support', chat)
            } else {
                io.emit('send_customer_support', chat)
            }
            
        })

        //end of customer support
        //for rider support
        socket.on('recieve_rider_support', async (data) => {
            console.log('rider support')
            //send user chat
            const sendertype =  data.sendertype
            const sender = data.sender 
            const type = data.type 
            const riderid = data.riderid
            const message = data.message
            const talk = await new ridersupporthModel({
                message: message,
                sender: sender, type , riderid
            });
            const chat = await talk.save()
            const socketid = await Onlineuser[riderid]
            if (sendertype == 'admin') {
                io.to(socketid).emit('send_rider_support', chat)
            } else {
                io.emit('send_rider_support', chat)
            }
            
        })

        //end of rdir support
        //for seller support
        socket.on('recieve_seller_support', async (data) => {
            console.log('seller support')
            //send user chat
            const sendertype =  data.sendertype
            const sender = data.sender 
            const type = data.type 
            const sellerid = data.sellerid
            const message = data.message
            const talk = await new sellersupporthModel({
                message: message,
                sender: sender, type , sellerid
            });
            const chat = await talk.save()
            const socketid = await Onlineuser[sellerid]
            if (sendertype == 'admin') {
                io.to(socketid).emit('send_seller_support', chat)
            } else {
                io.emit('send_seller_support', chat)
            }
            
        })

        //end of seller support
        socket.on('check_server', async (data) => {
            console.log('checkserver')
           
            const socketid = await Onlineuser[data.userid]
            io.to(socketid).emit('server_status', 'success')
        })


      //this code base should be an api and not a socket connection
      //thank you  
        // //after client ot server disconnects
        socket.on('receive_message', async (data) => {
              //send user chat
            console.log('receiving chat')
              const sender = data.sender 
            const friend = data.friend
            const key = `${sender}-${friend}`
            const oppokey = `${friend}-${sender}`
            // const chat = await cacheretrievechat(key)
            // const oppochat = await cacheretrievechat(oppokey)
            // const text = chat.concat(oppochat)
            // const sortedData = text
            // .map(JSON.parse) // Convert JSON strings to objects
            // .sort((a, b) => a.date - b.date); // Sort based on the 'date' property
            // console.log('this is offline client', sortedData)
           
            //update the user profile from the database
           
          });
    })
}

module.exports = {
chatuser
}