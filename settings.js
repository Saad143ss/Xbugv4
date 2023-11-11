//base by xbug (Xeon Bot Inc.)
//YouTube: @ZAINIKING_081
//Instagram: Zainiking081
//Telegram: t.me/zainiking71s
//GitHub: @zainiking8ss
//WhatsApp: +923077716993
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@Saadibrahim_900

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "923077716993"
global.ownername = "ZAINI KING"
global.ytname = "zainiking"
global.socialm = "GitHub: zainiking8ss"
global.location = "Multan"

global.ownernumber = '923077716993'  //creator number
global.ownername = 'ZAINI KING' //owner name
global.botname = 'ZAINIXBUG' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'Zaini\n\nContact: +923077716993'

//console view/theme
global.themeemoji = '🪀'
global.wm = "Zaini."

//theme link
global.link = 'https://chat.whatsapp.com/EezTtwtXvT07VdTkcQnP5X'

//custom prefix
global.prefa = ['']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
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
