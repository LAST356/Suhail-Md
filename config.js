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


global.SESSION_ID = process.env.SESSION_ID || SUHAIL_14_33_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgODUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2LFxuICAgICAgICA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAzLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxODMsXG4gICAgICAgIDk0LFxuICAgICAgICA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE2LFxuICAgICAgICAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODksXG4gICAgICAgIDc5LFxuICAgICAgICA2LFxuICAgICAgICA0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYsXG4gICAgICAgIDExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvMDNPK0YwQ0NSaHpxdzFQOWE3QlV2cnoyQysyV2wvaHR5TkRjOEhpcDVFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTN1hXeExYYVJ6R0dCdjFUOENrZGhRXCIsXG4gIFwicGhvbmVJZFwiOiBcImI3YzAyZDQ4LTM0NDEtNDhlYi1iNzNmLTI2NGJiYmFiMGNmNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICA3LFxuICAgICAgMjMsXG4gICAgICAxODQsXG4gICAgICAyMzEsXG4gICAgICAyMTEsXG4gICAgICAxOSxcbiAgICAgIDIzNCxcbiAgICAgIDk3LFxuICAgICAgMTgzLFxuICAgICAgMyxcbiAgICAgIDIzNixcbiAgICAgIDE0OCxcbiAgICAgIDI1MSxcbiAgICAgIDgxLFxuICAgICAgNzgsXG4gICAgICAxMjAsXG4gICAgICAxNjksXG4gICAgICAxNzYsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgMjQ5LFxuICAgICAgMjA3LFxuICAgICAgMTcyLFxuICAgICAgMTI1LFxuICAgICAgNzMsXG4gICAgICAyNDEsXG4gICAgICAyMzQsXG4gICAgICA2MCxcbiAgICAgIDUyLFxuICAgICAgMjEsXG4gICAgICAxMDAsXG4gICAgICA1MSxcbiAgICAgIDE2MSxcbiAgICAgIDc3LFxuICAgICAgMTQ4LFxuICAgICAgMjE4LFxuICAgICAgMTIzLFxuICAgICAgNzYsXG4gICAgICAxOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUExWREM0SlNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NzIxMDY1MTg3OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NTc2OTMyMDc2MzYwMzoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMWFJ0T1lDRUxiY3M3VUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlArSUJzbnJPQXZLMTFlU2d6cXJ3aWs0ZkEybnpaNFlqbzhSVWJMSHJFVWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSmdyMkVaOWx3ZWlPU3hSb0FScUhpWUVzTEtZTk4vYkg4dUdHTHc2S3llMk9ZM2NnR3EyV0NHQ1ovSCtTWERBaFhkZFpTcmxZQ3h2ZkNjK3BINXVnRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZUJBelYxMEdlUys3T2ZEaVYwakViOCs2NFUzcmlCcFpZd3R4OG5OYThSdXhHZ00vd3hwaTdCbjN0NndkM3FHRlVnUU14c1YzK2h4OUg4aHlyWk5haFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc3MjEwNjUxODc6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjYwOTIxMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=   // PUT your SESSION_ID 


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
