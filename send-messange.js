const {TOKEN} = require('./config')
const api     = require('vk-easy')
const keyboard = JSON.stringify({
    one_time: false,
    buttons: [
        [{
                action: {
                    type: "text",
                    payload: "{\"button\": \"1\"}",
                    label: "Отключится"
                },
                color: "negative"
            },
        ]
    ]
})

module.exports =(userid,text) => { 
     api('messages.send',{
         user_id: userid,
         message: text,
         access_token: TOKEN,
         keyboard
     })
     
};