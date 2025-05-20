const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭━━〔 *𝐒𝐄𝐍𝐔-𝐌𝐃* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *👋ʜɪ*: ${pushname}
┃◈┃• *⏳ᴜᴘᴛɪᴍᴇ*:  ${runtime(process.uptime())} 
┃◈┃• *📟 ʀᴀᴍ*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *👨‍💻 ᴏᴡɴᴇʀ*: JESTER EXE 
┃◈└───────────┈⊷
╰──────────────┈⊷

  *𝐒𝐞𝐧𝐮 𝐌𝐃 Multidevice Whatsapp Bot Make By (JESTER EXE).*

     ⭕𝗝𝗢𝗜𝗡 𝗢𝗨𝗥 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗖𝗛𝗔𝗡𝗡𝗘𝗟
     
  https://whatsapp.com/channel/0029Vb5Wqjy4Crfc5I7ML60l

     ⭕𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗠𝗘 𝗢𝗡 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣
     
  https://wa.me/message/3XVI6S2RKF5YB1
  
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐒𝐄𝐍𝐔_𝐌𝐃 💛`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/bjPrbF84/3174.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363388320701164@newsletter',
                    newsletterName: '𝐉𝐄𝐒𝐓𝐄𝐑',
                    serverMessageId: 190
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
