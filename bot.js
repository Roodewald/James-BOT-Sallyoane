const express    = require("express");
const bodyParser = require("body-parser")

const {PORT}     = require('./config')
const processing= require('./processing')

const server = express()
server.use(bodyParser.urlencoded({ extended:true}))
server.use(bodyParser.json())

server.get('/',(req, res) => res.send("<!DOCTYPE html><html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><!--[if lt IE 9]><meta http-equiv='X-UA-Compatible' content='IE=edge'><![endif]--><style>html{height:100%;font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-size:10px;-webkit-tap-highlight-color:transparent}*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body{height:100%;margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}button,h3,input{font-family:inherit}h3{font-weight:500;line-height:1.1;color:inherit;margin-top:0;margin-bottom:20px;font-size:24px}.authform{width:300px;background-color:#e1e5ec;padding:25px 27px;margin: 0 auto;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px}</style><title>Добро пожаловать!</title></head><body style='text-align: center'><table style='width:100%;height:100%;border:none'><tbody><tr><td style='padding: 20px'><div class='authform'><h3>Добро пожаловать!</h3><div style='margin-bottom: 18px'>Сервер развернут на NGROK с портом "+port+".<br>Удачной работы Руди</div></td></tr></tbody></table></body></html>"))
server.post('/',(req, res) => {
    const {body} = req
    switch (body.type) {
    case 'confirmation':
        res.end('ebe790bb') 
        break;
        
    case 'message_new':
        processing(body.object)
        res.end('ok')
         break;
    
    default:
        res.end('ok')
        break;
    }
})

server.listen(PORT, ()=>console.log('Bot listen: '+ PORT))

/*
{
  type: 'message_new',
  object: {
    date: 1579426548,
    out: 0,
    user_id: 157056486,
    read_state: 0,
    title: '',
    body: '1',
    owner_ids: []
  },
  group_id: 190842550,
  event_id: '67fd6255dac4e7380f01420dec41a197d135269b'
} */