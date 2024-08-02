const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || SUHAIL_14_53_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDcwLFxuICAgICAgICAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQxLFxuICAgICAgICA1OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OSxcbiAgICAgICAgNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDczLFxuICAgICAgICA1MixcbiAgICAgICAgMjM1LFxuICAgICAgICA4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM1LFxuICAgICAgICA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyLFxuICAgICAgICAxNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA1MixcbiAgICAgICAgMTU3LFxuICAgICAgICA4MixcbiAgICAgICAgNzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM2LFxuICAgICAgICA2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg0LFxuICAgICAgICA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTksXG4gICAgICAgIDM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MixcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU2LFxuICAgICAgICA3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUxLFxuICAgICAgICA0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHb0NEa0pvYm5EeTEzM2xYS0g0TGYyOUw2N3F2bnM2cGYrSzl5cjA2US9VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3NjczNzM1OTc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNjgwNUQzOTY5OTdGNjMzN0E0ODMxRkI3RUJCNzVGOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2MTAzOTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzY3MzczNTk3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzQxMkI0MkFEQzIyMjNFMDg4NzM5OTE4NDhBQkJCQ0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjEwMzkxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjc2NzM3MzU5NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVDNTM0MUJBOEU3NzIxQTE1MDM5NzY5RDM1QjBGODlGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjYxMDM5NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3NjczNzM1OTc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEMTY5RkNDN0ExRDY5NkEzRTdCRDgyQjBFMDY2QUJCQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2MTAzOTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMnR0X1FlM1hRRHFsRXQ2bkVpT0xhZ1wiLFxuICBcInBob25lSWRcIjogXCI1YzhjYThhZS0wOGFhLTQwZDQtODhiNi0xMmZkNTg5NTQ5MTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg1LFxuICAgICAgMTE5LFxuICAgICAgMzEsXG4gICAgICAyMTcsXG4gICAgICAyMzYsXG4gICAgICA3MixcbiAgICAgIDQ2LFxuICAgICAgMjQwLFxuICAgICAgMjAyLFxuICAgICAgMTAzLFxuICAgICAgNzMsXG4gICAgICAxMDIsXG4gICAgICAxNzMsXG4gICAgICAyNDUsXG4gICAgICAxMzgsXG4gICAgICAxODYsXG4gICAgICAyMjUsXG4gICAgICAxMTksXG4gICAgICAyNTUsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICA0OCxcbiAgICAgIDg0LFxuICAgICAgMTA5LFxuICAgICAgMTY2LFxuICAgICAgNzAsXG4gICAgICAyNDQsXG4gICAgICAxODgsXG4gICAgICAyLFxuICAgICAgMjQ4LFxuICAgICAgMTU2LFxuICAgICAgNTksXG4gICAgICAxNzMsXG4gICAgICAzMyxcbiAgICAgIDE3MyxcbiAgICAgIDE5NyxcbiAgICAgIDE3MixcbiAgICAgIDI1MyxcbiAgICAgIDE3MCxcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNDOFhCOEVGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzY3MzczNTk3NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTQ1MjAyMzE3NDc3MTE6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJMYXNzaWVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNN2V4M0FRenVXenRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitza0d2c2R2MDdMTWhvcXJ1QUh6QnVvd2RVWjVadmZPYUttVVFnSzF1bWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOG5lbktoSHF5V2JJWFRnQm5GS1BxTHdjUUZadFdieXhtUjRmOTVLTjZqaU8zSjRDZ2ZKNzNybC9iTTFzWDFweVpTSDBDRThIb3ByZzFBQjFpT1E2REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRlhyVDZkRS8wTzJBc3VWM0g1TnhveVZCWFkrSXN2eGN1Myt3eC9rRHY0K0FYU2VVTDVWSmQyNmo0ODZHUjVBZFhaMDMzWXhvdkVha01uZTBOemlaQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc2NzM3MzU5NzU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2MTAzODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQYlpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBiWi5qc29uIjogIntcImtleURhdGFcIjpcImZaVnFrTG9ZWWwyUEhBMU9rbmZSNmlvcjljOUJiZGs2cVdKWlNPWWFRY1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjM2MDU2Mzk4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI2MTAzODgyNzFcIn0iCn0=   // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
