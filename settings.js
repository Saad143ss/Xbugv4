//base by xbug (Xeon Bot Inc.)
//YouTube: @saadibrahim900
//Instagram: saadibrahim900
//Telegram: t.me/saad143s
//GitHub: @Saad143ss
//WhatsApp: +923156157942
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "923156157942"
global.ownername = "Saad ibrahim"
global.ytname = "saadibrahim"
global.socialm = "GitHub: Saad143ss"
global.location = "Dg khan"

global.ownernumber = '923156157942'  //creator number
global.ownername = 'Saad ibrahim' //owner name
global.botname = 'Saadbug' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'Saad\n\nContact: +923156157942'

//console view/theme
global.themeemoji = '🪀'
global.wm = "Saad."

//theme link
global.link = 'https://chat.whatsapp.com/DNw2r2zMZIZGGuKXxxN2aY'

//custom prefix
global.prefa = ['']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
