const send = require('./send-messange')

module.exports = async({user_id: userid, body: text}) => {
    await send(userid,text)
};