const express    = require("express")
const bodyParser = require("body-parser")
const { Botact } = require('botact')

const server = express()
const bot = new Botact({
    token: '8c17958da8aba8fa591c8018bac97e623fff96e84201456844aa185c5b2b6825afc3d30a3d46666e6857b',
    confirmation: 'ebe790bb'
})

var phrasesOnMusic = [
    "+",
    "-"
]

bot.on(function (ctx) {
    console.log(ctx.body)

    var phrasesOnDefaltCTX = [
        "Я получил твое сообщение "+"<<"+ ctx.body+ ">>"+" но его не понял, напиши help (Я очень сильно привязан к нижнему регистру)",
        "Я к сожалению не понял что ты хочешь &#128549;",
    ]

    ctx.reply(phrasesOnDefaltCTX[Math.floor(Math.random()*phrasesOnDefaltCTX.length)])
})

bot.command('help', function(ctx) {
    ctx.reply("Я могу сказать какое время сейчас на компе у Павла, командой: 'time'  &#128521;")
})

bot.command('time', function(ctx) {
    const date = new Date()

    const h = date.getHours()
    const m = date.getMinutes()
    const s = date.getSeconds()

    ctx.reply("Сейчас у Павла на компе: "+h +':'+ m + ':' + s)
})

bot.event('group_join', ({ reply }) => {
    reply('Thanks!')
  })

  bot.hears(/(car|tesla)/, ({ reply }) => {
    reply('I love Tesla!')
  })


  bot.on('audio', ({ reply }) => reply(phrasesOnMusic[Math.floor(Math.random()*phrasesOnMusic.length)]))

server.use(bodyParser.json())

server.post('/', bot.listen)

server.listen(80, ()=>console.log('Вы слушаете порт 80'))