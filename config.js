const fs = require('fs-extra');
if (fs.existsSync('.env'))
  require('dotenv').config({ path: __dirname + '/.env' });
const path = require("path");

module.exports = { 
    SESSION_ID: process.env.SESSION_ID || 'Gifted~H4sIAAAAAAAAA5VUTZOiSBD9L3XZg8YogiBGdMQCIqKt4gd+sDGHAgoohaIsCgUn/O8b2N3Tc9id7eVUVGVkvsz3Xv4AJMcFmqEaDH8AyvAVctQceU0RGAK9jCLEQBuEkEMwBJIldvxryA790il9lCgnR5Yv4XKzzpY3LiZS/zXZzv0kmtgv4NEGtPRTHPwmIblEsrMfncJzWe8uIulcBRelNnVDn1XsdpqRcimvKyrr5gt4NBkhZpjEJk1QhhhMZ6h2IGZfg+8aE+/ocauF410du95hEOar/mKtluHhFtw3S0dIkHtuOaL7NfgnzvplHVhrjheTzaKOTCGxZiO8VVpoUJ18C7nGVlYm2sp+g1/gmKDQDhHhmNdfnvt5pqhuunK8i2/JBslqfqpIH4k7saAKGeuiudaWkeavyBeBG8v56z6+SAEVz7MMC1QYt8zSEEaLEur6tStc7quJoC3zLP8VuMM+tHL+P3O3J9LRnXbUO0TxbhUol9xQb3IlxEU+WozNaes8npKLN6VE+hr8bJyVK4OcfDjwZ1EqWnVlbG7zHs6dfhpCi9rVeu9CYXXqfsKHvGS/Qwk7jj9SEt3t2JUQBnKlUoELU15dEzsIFhtXhn64PVqOR2W6uI1q6x5xftP8u7Hd+6V/WWeX1Eu30SHorv2ePFW1CGsvz47OqLZDMBQebcBQjAvOIMc5ed7JQhvA8LpBAUP8OV6wXybzuxWNWmTj7dOOo3v6zUhuIdVNfdUzuanOuz1JxyMlfgFtQFkeoKJA4QQXPGf1HBUFjFEBhn99bwOCKv5GXFNOFNogwqzgLilpmsPwg9WPRxgEeUn4piaB0RwQA8Pu5zXiHJO4aOZYEsiCBF+RkUBegGEE0wL97BAxFIIhZyX66VojD5vBezvL3R1VC7RB9iQEh2AIespAUiShN+iJw173z+LbrckKKf1GEAdtkD6jhIGqqF1V7Mq9wUB8RjYPbUBgkwtYJSGI/VE0Q3+H3FQIEYc4LRrlO1hL1YFpzkcHNj9blmbGmhFr4LPFD628cXFP+s40fLX1uV+Epofgqx1plJqtKKZqBEf52qKROndf7+bLPyRpOtP888pf9N3eRl6qZ6Mj80I9j5m6n6qmYO8C6T7Q7+f70T55E3yPW3wRyT3X6ImmcjdZni9kN1gUraMrLOen0SVZuksjfmmqheiKA/RrsdWs/xrbnjIJO6ZWrdhynInSLJSucpqt0bSjpBctsapRpz6vUuk0P1b9VZI7+eGaK/fEWO/YQZzLdjQ4ZtRfjHwUelVye1Px00Xp+/bCT3015DW/EUbPZfBOw3+R+Ya7kVz30f4lxft2+ReH6oGEtvVhU2tbS5msrUOG68ltBtcOkWbRoRfL5vpy6GzHxqACj8f3NqAp5FHOssbeJGT5UyosLxsN2yTKf7cita5txvG4aTyFBdc+fbHFGSo4zCgYCoosSaKsispblMNyOoFF0kh1JiUTqRF5rVG64ZB/2AxozWdPt+DxNzB+9D6CBwAA',
    PREFIX: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇",
    OWNER_NUMBER : process.env.OWNER_NUMBER || "",  // put only one number
    SUDO_NUMBERS : process.env.SUDO_NUMBERS || "", // can be multiple numbers separated by commas
    BOT_NAME : process.env.BOT_NAME || '𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃',
    FOOTER : process.env.FOOTER || 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ',
    CAPTION : process.env.CAPTION || '©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓',
    VERSION: process.env.VERSION || '5.0.0',
    BOT_PIC : process.env.BOT_PIC || 'https://gitcdn.giftedtech.co.ke/image/AZO_image.jpg',            
    MODE: process.env.MODE || "private",
    PM_PERMIT: process.env.PM_PERMIT || 'false',
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi",
    DM_PRESENCE : process.env.DM_PRESENCE || 'online', // recording/typing/online/offline
    GC_PRESENCE : process.env.GC_PRESENCE || 'online', // recording/typing/online/offline
    CHATBOT : process.env.CHATBOT || 'false', // can be true/audio/false   
    CHATBOT_MODE : process.env.CHATBOT_MODE || 'inbox', // can be inbox/groups/allchats
    STARTING_MESSAGE : process.env.STARTING_MESSAGE || "true",
    ANTIDELETE : process.env.ANTIDELETE || 'indm', // inchat/indm/false
    GOODBYE_MESSAGE : process.env.GOODBYE_MESSAGE || 'false',
    ANTICALL : process.env.ANTICALL || 'false', // (decline/true)/block/false
    ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
    WELCOME_MESSAGE : process.env.WELCOME_MESSAGE || 'false',
    ANTILINK : process.env.ANTILINK || 'false', // or delete or kick or true
    AUTO_LIKE_STATUS : process.env.AUTO_LIKE_STATUS || 'true',
    AUTO_READ_STATUS : process.env.AUTO_READ_STATUS || 'true',
    STATUS_LIKE_EMOJIS : process.env.STATUS_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",   
    STATUS_REPLY_TEXT: process.env.STATUS_REPLY_TEXT || "*ʏᴏᴜʀ sᴛᴀᴛᴜs ᴠɪᴇᴡᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ ✅*",             
    AUTO_REACT : process.env.AUTO_REACT || 'false',
    AUTO_REPLY : process.env.AUTO_REPLY || 'false',
    AUTO_READ_MESSAGES : process.env.AUTO_READ_MESSAGES || 'false', // true/commands/false
    AUTO_BIO : process.env.AUTO_BIO || 'false',
    AUTO_BLOCK: process.env.AUTO_BLOCK || '212,233',
    YT: process.env.YT || 'youtube.com/@giftedtechnexus',
    NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363408839929349@newsletter',
    NEWSLETTER_URL: process.env.NEWSLETTER_URL || 'https://whatsapp.com/channel/0029Vb3hlgX5kg7G0nFggl0Y',
    BOT_REPO: process.env.BOT_REPO || 'mauricegift/gifted-md',
    PACK_NAME: process.env.PACK_NAME || '𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃',
    PACK_AUTHOR: process.env.PACK_AUTHOR || '𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇'
};

let fileName = require.resolve(__filename);
fs.watchFile(fileName, () => {
    fs.unwatchFile(fileName);
    console.log(`Writing File: ${__filename}`);
    delete require.cache[fileName];
    require(fileName);
});
