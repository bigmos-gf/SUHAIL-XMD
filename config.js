I'mconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="famousblessed8@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_24_12_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxLFxuICAgICAgICA5MixcbiAgICAgICAgMTIwLFxuICAgICAgICA1NixcbiAgICAgICAgMTA2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDY2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY5LFxuICAgICAgICA1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI4LFxuICAgICAgICA2NixcbiAgICAgICAgMTAxLFxuICAgICAgICA2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcwLFxuICAgICAgICA1MixcbiAgICAgICAgMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI4LFxuICAgICAgICA4NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjksXG4gICAgICAgIDUyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDksXG4gICAgICAgIDk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MixcbiAgICAgICAgMTM1LFxuICAgICAgICA1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgOTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDczLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgODIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYzRVV2hpejVpUEpjQ1NRTG9IVUwyMWNhaGpja0VJVGluY25FV1FiTWZnQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWjREejdPYTZReTJmbU5NWHMzbFJwd1wiLFxuICBcInBob25lSWRcIjogXCIwNmU5MjlhMS0yMmU0LTQ1ZTQtOGQyMi05NTYxZmQ5MmVjYWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAzNixcbiAgICAgIDI0NyxcbiAgICAgIDMzLFxuICAgICAgNTksXG4gICAgICAxMjMsXG4gICAgICA5MyxcbiAgICAgIDY4LFxuICAgICAgMTMwLFxuICAgICAgMTczLFxuICAgICAgOTMsXG4gICAgICAyMDYsXG4gICAgICAyNDMsXG4gICAgICAxMTEsXG4gICAgICAxNzgsXG4gICAgICA1NixcbiAgICAgIDIzLFxuICAgICAgNjAsXG4gICAgICA3MyxcbiAgICAgIDE0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICAyNTUsXG4gICAgICAwLFxuICAgICAgMTQyLFxuICAgICAgMTIsXG4gICAgICAzOCxcbiAgICAgIDUwLFxuICAgICAgMTc2LFxuICAgICAgMzcsXG4gICAgICAyNDUsXG4gICAgICA5NCxcbiAgICAgIDEzMCxcbiAgICAgIDE4NSxcbiAgICAgIDYsXG4gICAgICAxODgsXG4gICAgICAyNDcsXG4gICAgICA0NixcbiAgICAgIDE5NixcbiAgICAgIDE1LFxuICAgICAgMjQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRLVkxNOExBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM5MDIwMjUzOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8JKAsfCShpkg44CM8JaggeOAjSDwnZW28J2WjvCdlpPwnZaMIPCdkarwnZKJ8J2SgvCdkpDwnZKUIOOAjPCWoIHjgI0g8JKGmfCSgLFcIixcbiAgICBcImxpZFwiOiBcIjE0MDE0OTk4NDAxMTQ3OjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09tQzF2d0NFTUxVN0xvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRXowVk9QS2w1b2xtVFNFT21NNkJ5S012cS93ejBUd00xOHZ1VkRYdkJSMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1VlY3TTRrcWQ5eENsVDY4a0RQMlVFSEl1VGY3bnhTUVVDWWdXQUgzSnhwek1lRWMvM1pXdHl4S1MwNVFLRGU3bW51UHJuRnJhL2tIeVRjV3llZVlCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1UlZyQ2xyY0k4eFpHaVIvaGx5NS9oRXhJZ2JlZ0I0TDd5cktJbnlxbVdjc25oZzJCWE5JTnJ3OXI1VDlCRlhuOTByTWVab2Rvbmd3Y0hETnRjQ1hBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM5MDIwMjUzOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQwMjc4NDdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
