
// used in redis string, we just store the group chat id as a string , message sender , and the group id .

const { customerdispatchModel } = require("../../customer/core/db/chat")
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