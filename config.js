const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/SamPandey001/Secktor-Md'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '919628516236'
global.devs = '919628516236';
global.website = 'https://github.com/SamPandey001/Secktor-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/ae42844d1eb41e25b7311.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝐁𝐨𝐭𝐭𝐨' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DULAN' : process.env.OWNER_NAME,
  sessionName: process.env.SESSION_ID === undefined ? '𝙌𝙐𝙀𝙀𝙉-𝙉𝙄𝘾𝙆𝙔-𝙈𝘿;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK01wK2taUGFUdmJqdWd5UGFkc0ZsNzNCZGZ5U1BNSGNsVWp1SmdlMkZIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVVmbXJibGt3bVozZ0JSb0tlaHBteVY5Q2xQMExZaVp2azJULzFpU1NVTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQ2hmL0ZXUUFpMjREK1NCbnUwWm9uSWdraTRERkd5Y1I5SDRMUzN6bkhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiWTRoeHdxK1RlbDV6aXlJWUNzbk9TZEpHR0V0RkFza2pLSFJ3RHlyRWdnPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9NYkozOXpSNkU3dmxJTnpnTzFmMFRmWXI1UW5tY3VuRnVRUVhScFkxMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im8xSlQ1NUs1UEVpemtsS2NjLzJDSVNlVzFNa3BnR3FsVDdHVUF1clhybFE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJONXNhcHdZL0tnd1p5M0RlOHNKK3dFcisydlB2TDQzZVVNL1plaDEwSkNTMGorckxqZUNEQVZlWDlFcTlmVUdZSjk2N2pFT1RjbWQxMG5YaWZxK0Fpdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIwNywiYWR2U2VjcmV0S2V5IjoiVlJVREdXSk94OTkyS01jako3UVZjSFNyeWpaRlMwWDlnQlFsK2N4TUhXaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZFU1YkRWVDlRb3lTZHJmVjUwOEhBQSIsInBob25lSWQiOiJlZTMyMjhkMC0yMTljLTRkZDQtODk2Yy01MWFjMzE0OGU5ZjIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVJhenRidURyOUZ1NXE5QnJaaEMyaWFKaWxVPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhZzZ4TkI1WUhFUERveDlQWnZWZTBOTWphSGc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLdmN0NU1IRU0vcWhLd0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVJU2JxWTV5VzZReHZ1aERrNVZGTktNS2JDY3V4N1R0N0dhY1psTWNJMlE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdLYVhjOGJRczk4SDBnZXlvODR6SFBkTVJ6RGM3TnBkVThzcmJ3YnV1NmdCWmNacld1cjZPdzFCRXdjbzZMdzhpMWhDbTQwZU5ic2xNcSthTDJTL0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4RkZUb2lxSHVRclBnWWRKUHFiamdGVkhuVXpaSmVxSUFjd2RzYW5oa3RuRXZreGtSaUV5aHVVb2VtdEdOMkc5bEdJUTdBTlZUUUNnVVBSbW14ZFVpZz09In0sIm1lIjp7ImlkIjoiOTQ3MjI2MTQyMjk6MzdAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjI2MTQyMjk6MzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZVNFbTZtT2NsdWtNYjdvUTVPVlJUU2pDbXduTHNlMDdleG1uR1pUSENOayJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMjk2NjYxMn0=' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? '𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? '𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,xxx,sex,fucked,Brazzers,pronhub,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,hutta',
  INBOX_BL_MSG: process.env.INBOX_BL_MSG === undefined ? '*Inbox not allowed' : process.env.INBOX_BL_MSG,	
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'QUEEN-NICKY',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
