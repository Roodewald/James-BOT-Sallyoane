const send = require('./send-messange')

module.exports = async({user_id: userid, body: text, payload}) => {
    let button;
    try {
        button =+JSON.parse(payload).button;
    } catch (error) {}//elint-disable-line

    if(button===1){
        await send(userid,'Уходим')
        return;
    }
    await send(userid,text)
};