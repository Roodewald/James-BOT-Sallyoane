const {TOKEN} = require('./config')
const api     = require('vk-easy')
const keyboard = JSON.stringify({command:"start"})

module.exports =(userid,text) => { 
     api('messages.send',{
         user_id: userid,
         message: text,
         access_token: TOKEN,
         
     })
     
};