const {TOKEN} = require('./config')
const api     = require('vk-easy')
const keyboard = JSON.stringify({
    one_time: false,
    buttons: [
        [{
            action: {
                type: "location",
                payload: "{\"button\": \"1\"}"
            }
        }],
        [{
            action: {
                type: "open_app",
                app_id: 6979558,
                owner_id: -181108510,
                hash: "sendKeyboard",
                label: "Отправить клавиатуру"
            }
        }],
        [{
                action: {
                    type: "text",
                    payload: "{\"button\": \"1\"}",
                    label: "Negative"
                },
                color: "negative"
            },
            {
                action: {
                    type: "text",
                    payload: "{\"button\": \"2\"}",
                    label: "Positive"
                },
                color: "positive"
            },
            {
                action: {
                    type: "text",
                    payload: "{\"button\": \"2\"}",
                    label: "Primary"
                },
                color: "primary"
            },
            {
                action: {
                    type: "text",
                    payload: "{\"button\": \"2\"}",
                    label: "Secondary"
                },
                color: "secondary"
            }
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