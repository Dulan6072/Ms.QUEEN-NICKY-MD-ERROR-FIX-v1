const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, Config } = require('../lib')

cmd({
            pattern: "menu",
            react: "📃",
            category: "menu1",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu.*`
            const alivtxt = `
✶━━┉┉┉┉┉━╾╾━┉┉┉┉┉━━✶ 

*❖ ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ Qᴜᴇᴇɴ ɴɪᴄᴋʏ ᴍᴇɴᴜ ʟɪꜱᴛ ❖*

✶━━┉┉┉┉┉━╾╾━┉┉┉┉┉━━✶ 
 
 ❑ 💃 *𝙱𝙾𝚃 𝙽𝙰𝙼𝙴*  *Qᴜᴇᴇɴ ɴɪᴄᴋʏ ᴍᴅ*
 
 ❑ 💃 *𝙾𝚆𝙽𝙴𝚁 𝙽𝚄𝙼𝙱𝚄𝚁* 94742443114
 
 ❑ 💃 *𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴* ${Config.ownername}
 
 ❑ 💃 *𝚁𝚄𝙽𝚃𝙸𝙼𝙴* ${runtime(process.uptime())}
 
 ❑ 💃 *𝙼𝙰𝙳𝙴 𝙱𝚈 ᴍʀ ᴅᴜᴍɪᴅᴜ*
 
✶━━┉┉┉┉┉━╾╾━┉┉┉┉┉━━✶ 
 
 °📌 _මෙම මැසෙජය ටැග් කර ඔබට අවශය අංකයක් යොමු කරන්න_ 
 
✶━━┉┉┉┉┉━╾╾━┉┉┉┉┉━━✶ 
   
උදා ÷ 1.1 මෙි ආකාරයට මෙම මැසේජය tag කර දමන්න 

✶━━┉┉┉┉┉━╾╾━┉┉┉┉┉━━✶

┏⃞❑✷▎🎋⃟🥷➥.1.1 *ᴅᴏᴡɴʟᴏᴅᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.1.2 *ɢᴇɴᴇʀᴀʟ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.1.3 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.1.4 *ᴛᴇxᴛᴘʀᴏ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.1.5 *ᴄᴏɴᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ*
┃
┣⃞⃟❑✷▎🎋⃟🥷➥.1.6 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.1.7 *ɴᴇᴡꜱ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.1.8 *ɢᴀᴍᴇ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.1.9 *ᴀᴜᴅɪᴏ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.1.10 *ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃟✷▎🎋⃟🥷➥.1.11 *ᴀɪ ᴍᴇɴᴜ*
┃
┣⃞⃟❑✷▎🎋⃟🥷➥.1.12 *ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.1.13 *ɴꜱꜰᴡ ᴍᴇɴᴜ*
┃
┣❑ ⃟✷🎋⃟🥷➥.1.14 *ʀᴇᴀᴄᴛɪᴏɴ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.1.15 *ᴍᴏᴅᴇʀᴀᴛɪᴏɴ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.1.16 *ɢᴇɴ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.1.17 *ᴡᴇᴇʙ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.1.18 *ᴍɪꜱᴄ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.1.19 *ᴇᴄᴏɴᴏᴍʏ ᴍᴇɴᴜ*
┃
┗⃞❑✷▎🎋⃟🥷➥.1.20 *ᴇʜɪ ᴍᴇɴᴜ*
❍═════════════════════❍
🧙‍♂️  *_Qᴜᴇᴇɴ ɴɪᴄᴋʏ ᴍᴅ_*
 ©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ᴅᴜᴍɪᴅᴜ
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "1",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Mr.Hansamala.*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝙳𝙾𝚆𝙽𝙻𝙾𝙳𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🧜‍♂️⃟➤ᴅᴏᴡɴᴀᴘᴋ
┃ ├❑🧜‍♂️⃟➤ɪᴏꜱ
┃ ├❑🧜‍♂️⃟➤ɴᴀꜱᴀ
┃ ├❑🧜‍♂️⃟➤ᴡᴀʙᴇᴛᴀ
┃ ├❑🧜‍♂️⃟➤ᴛᴛꜱ
┃ ├❑🧜‍♂️⃟➤ʏᴛꜱ
┃ ├❑🧜‍♂️⃟➤ᴠɪᴅᴇᴏ
┃ ├❑🧜‍♂️⃟➤ᴘʟᴀʏ
┃ ├❑🧜‍♂️⃟➤ʀɪɴɢᴛᴏɴᴇ
┃ ├❑🧜‍♂️⃟➤ᴘɪɴᴛ
┃ ├❑🧜‍♂️⃟➤ᴍᴇᴅɪᴀꜰɪʀᴇ
┃ ├❑🧜‍♂️⃟➤ʏᴛᴍᴘ4
┃ ├❑🧜‍♂️⃟➤ʏᴛᴍᴘ3
┃ ├❑🧜‍♂️⃟➤ʏᴛᴅᴏᴄ
┃ ├❑🧜‍♂️⃟➤ꜱꜱ
┃ ├❑🧜‍♂️⃟➤ꜰʙ
┃ ├❑🧜‍♂️⃟➤ᴛɪᴋᴛᴏᴋ
┃ ├❑🧜‍♂️⃟➤ᴛᴠɪᴅᴇᴏ
┃ ├❑🧜‍♂️⃟➤ꜰʙꜱ
┃ ├❑🧜‍♂️⃟➤ᴅᴀᴅᴜ
┃ ├❑🧜‍♂️⃟➤ᴛᴛᴘ
┃ ├❑🧜‍♂️⃟➤ᴠɪᴅᴇᴏ3
┃ ├❑🧜‍♂️⃟➤ᴛᴇꜱᴛꜱᴏɴɢ
┃ ├❑🧜‍♂️⃟➤ᴀᴛᴛᴘ
┃ ├❑🧜‍♂️⃟➤ᴛɪᴋᴛᴏᴋ
┃ ├❑🧜‍♂️⃟➤ᴘʟᴀʏʟɪꜱᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🧙‍♂️ *_Qᴜᴇᴇɴ ɴɪᴄᴋʏ ᴍᴅ_*
👩‍💻 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴜᴍɪᴅᴜ_*
`;
            let aliveMessage = {
                image: {
                    url: 'https://telegra.ph/file/197373b612da311e2c9d7.jpg',
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "2",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Mr.Hansamala.*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙶𝙴𝙽𝙴𝚁𝙰𝙻 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🐉⃟➤ ʟɪꜱᴛ
┃ ├❑🐉⃟➤ᴏᴡɴᴇʀ
┃ ├❑🐉⃟➤ꜰɪʟᴇ
┃ ├❑🐉⃟➤ᴄʜᴀᴛɢᴘᴛ
┃ ├❑🐉⃟➤ʀᴇᴘᴏ
┃ ├❑🐉⃟➤ꜱᴛᴀᴛᴜꜱ
┃ ├❑🐉⃟➤ᴛʜᴇᴍᴇ
┃ ├❑🐉⃟➤ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
┃ ├❑🐉⃟➤ᴘɪɴɢ
┃ ├❑🐉⃟➤ꜱɪʀᴀꜱᴀ
┃ ├❑🐉⃟➤ᴀʟɪᴠᴇ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "3",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙶𝚁𝙾𝚄𝙿 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🧞‍♀️⃟➤ꜱᴛɪᴄᴋᴇʀ
┃ ├❑🧞‍♀️⃟➤ꜱᴜᴘᴘᴏʀᴛ
┃ ├❑🧞‍♀️⃟➤ᴡᴀʀɴ
┃ ├❑🧞‍♀️⃟➤ᴛᴀɢᴀʟʟ
┃ ├❑🧞‍♀️⃟➤ʀᴇϙᴜᴇꜱᴛ
┃ ├❑🧞‍♀️⃟➤ʀᴇᴛʀɪᴠᴇ
┃ ├❑🧞‍♀️⃟➤ʀᴡᴀʀɴ
┃ ├❑🧞‍♀️⃟➤ᴘᴏʟʟ
┃ ├❑🧞‍♀️⃟➤ᴘʀᴏꜰɪʟᴇ
┃ ├❑🧞‍♀️⃟➤ʀᴀɴᴋ
┃ ├❑🧞‍♀️⃟➤ᴘʀᴏᴍᴏᴛᴇ
┃ ├❑🧞‍♀️⃟➤ᴋɪᴄᴋ
┃ ├❑🧞‍♀️⃟➤ᴍᴇᴍᴇɢᴇɴ
┃ ├❑🧞‍♀️⃟➤ɢʀᴏᴜᴘ
┃ ├❑🧞‍♀️⃟➤ɢʀᴏᴜᴘᴘɪᴄ
┃ ├❑🧞‍♀️⃟➤ʜɪᴅᴇᴛᴀɢ
┃ ├❑🧞‍♀️⃟➤ᴀᴅᴅ
┃ ├❑🧞‍♀️⃟➤ɢᴇᴛᴊɪᴅꜱ
┃ ├❑🧞‍♀️⃟➤ᴅᴇᴍᴏᴛᴇ
┃ ├❑🧞‍♀️⃟➤ᴅᴇʟ
┃ ├❑🧞‍♀️⃟➤ᴄʜᴇᴄᴋᴡᴀʀɴ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪʟɪɴᴋ
┃ ├❑🧞‍♀️⃟➤ᴏɴʟʏᴀᴅᴍɪɴ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪʙᴏᴛ
┃ ├❑🧞‍♀️⃟➤ᴅɪꜱᴀʙʟᴇ
┃ ├❑🧞‍♀️⃟➤ᴇɴᴀʙʟᴇ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪꜰᴀᴋᴇ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪᴅᴇᴍᴏᴛᴇ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪᴘʀᴏᴍᴏᴛᴇ
┃ ├❑🧞‍♀️⃟➤ᴘᴅᴍ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪʟɪɴᴋ
┃ ├❑🧞‍♀️⃟➤ ᴀᴄᴛ
┃ ├❑🧞‍♀️⃟➤ ᴅᴇᴀᴄᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "5",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝙼𝙴𝙽𝚄
┃ ├╼╼╼╼╼╼╼╼╼╼●
┣⃞❑⃝🧚‍♂️⃟➥ᴘʜᴏᴛᴏ
┣⃞❑⃝🧚‍♂️⃟➥ϙᴜᴏᴛᴇʟʏ
┣⃞❑⃝🧚‍♂️⃟➥ꜰᴀɴᴄʏ
┣⃞❑⃝🧚‍♂️⃟➥ᴛɪɴʏ
┣⃞❑⃝🧚‍♂️⃟➥ᴛᴏᴀᴜᴅɪᴏ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "4",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝚃𝙴𝚇𝚃𝙿𝚁𝙾 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🌿⃟➤ᴅᴇᴇᴘꜱᴇᴀ
┃ ├❑🌿⃟➤ʜᴏʀʀᴏʀ
┃ ├❑🌿⃟➤ᴡʜɪᴛᴇʙᴇᴀʀ
┃ ├❑🌿⃟➤ᴊᴏᴋᴇʀ
┃ ├❑🌿⃟➤ᴍᴇᴛᴀʟʟɪᴄ
┃ ├❑🌿⃟➤ꜱᴛᴇᴇʟ
┃ ├❑🌿⃟➤ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ
┃ ├❑🌿⃟➤ᴜɴᴅᴇʀᴡᴀᴛᴇʀ
┃ ├❑🌿⃟➤ʟᴜxᴜʀʏ
┃ ├❑🌿⃟➤ɢʟᴜᴇ
┃ ├❑🌿⃟➤ꜰᴀʙʀɪᴄ
┃ ├❑🌿⃟➤ᴛᴏxɪᴄ
┃ ├❑🌿⃟➤ᴀɴᴄɪᴇɴᴛ
┃ ├❑🌿⃟➤ᴄʟᴏᴜᴅ
┃ ├❑🌿⃟➤ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ
┃ ├❑🌿⃟➤ᴛʜᴜɴᴅᴇʀ
┃ ├❑🌿⃟➤ꜱᴄɪꜰɪ
┃ ├❑🌿⃟➤ꜱᴀɴᴅ
┃ ├❑🌿⃟➤ʀᴀɪɴʙᴏᴡ
┃ ├❑🌿⃟➤ᴘᴇɴᴄɪʟ
┃ ├❑🌿⃟➤ɴᴇᴏɴ
┃ ├❑🌿⃟➤ᴍᴀɢᴍᴀ
┃ ├❑🌿⃟➤ʟᴇᴀᴠᴇꜱ
┃ ├❑🌿⃟➤ɢʟɪᴛᴄʜ
┃ ├❑🌿⃟➤ᴅɪꜱᴄᴏᴠᴇʀʏ
┃ ├❑🌿⃟➤ᴄʜʀɪꜱᴛᴍᴀꜱ
┃ ├❑🌿⃟➤ᴄᴀɴᴅʏ
┃ ├❑🌿⃟➤1917
┃ ├❑🌿⃟➤ɴᴇᴡᴛᴇxᴛ
┃ ├❑🌿⃟➤ʙʟᴀᴄᴋᴘɪɴᴋ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "6",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├🧜‍♂️⃟➤ᴊᴏɪɴ
┃ ├🧜‍♂️⃟➤ᴜɴʙʟᴏᴄᴋ
┃ ├🧜‍♂️⃟➤ᴜᴊɪᴅ
┃ ├🧜‍♂️⃟➤ʙʟᴏᴄᴋ
┃ ├🧜‍♂️⃟➤ᴀᴅᴅɴᴏᴛᴇ
┃ ├🧜‍♂️⃟➤ϙʀ
┃ ├🧜‍♂️⃟➤ꜱʜᴇʟʟ
┃ ├🧜‍♂️⃟➤ᴇᴠᴀʟ
┃ ├🧜‍♂️⃟➤ᴅᴇʟɴᴏᴛᴇ
┃ ├🧜‍♂️⃟➤ᴅᴇʟᴀʟʟɴᴏᴛᴇꜱ
┃ ├🧜‍♂️⃟➤ʙᴀɴ
┃ ├🧜‍♂️⃟➤ᴀʟʟɴᴏᴛᴇꜱ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "7",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙽𝙴𝚆𝚂 𝙼𝙴𝙽𝚄
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🐉⃟➤ɴᴀꜱᴀ
┃ ├❑🐉⃟➤ᴛᴇᴄʜɴᴇᴡꜱ
┃ ├❑🐉⃟➤ɴᴇᴡꜱ/ᴇꜱᴀɴᴀ
┃ ├❑🐉⃟➤ʜɪʀᴜɴᴇᴡꜱ
┃ ├❑🐉⃟➤sirasa
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "8",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `

┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑💭⃟➤ᴅɪᴄᴇ
┃ ├❑💭⃟➤ᴅᴇʟᴛᴛᴛ
┃ ├❑💭⃟➤ᴛᴛᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┖━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "9",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙰𝚄𝙳𝙸𝙾 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├🧜‍♂️⃟➤ʙᴀꜱꜱ
┃ ├🧜‍♂️⃟➤ʙʟᴏᴡɴ
┃ ├🧜‍♂️⃟➤ᴅᴇᴇᴘ
┃ ├🧜‍♂️⃟➤ꜰᴀꜱᴛ
┃ ├🧜‍♂️⃟➤ʀᴇᴠᴇʀꜱᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "10",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🍁⃟➤ᴄɪʀᴄʟᴇ
┃ ├❑🍁⃟➤ᴄʀᴏᴘ
┃ ├❑🍁⃟➤ʀᴏᴜɴᴅ
┃ ├❑🍁⃟➤ᴀᴛᴛᴘ
┃ ├❑🍁⃟➤ᴛᴛᴘ
┃ ├❑🍁⃟➤ꜱᴛᴇᴀʟ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "11",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙰𝙸 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┣⃞❑⃝🧚‍♂️⃟➥ᴄʜᴀᴛ
┣⃞❑⃝🧚‍♂️⃟➥ᴅᴀʟʟᴇ
┣⃞❑⃝🧚‍♂️⃟➥ɢᴘᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "12",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝚂𝙴𝙰𝚁𝙲𝙷 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┣⃞❑⃝🧚‍♂️⃟➥ɴᴘᴍ
┣⃞❑⃝🧚‍♂️⃟➥ꜱꜱ
┣⃞❑⃝🧚‍♂️⃟➥ᴍᴏᴠɪᴇ
┣⃞❑⃝🧚‍♂️⃟➥ᴡᴇᴀᴛʜᴇʀ
┣⃞❑⃝🧚‍♂️⃟➥ʜᴏʀᴏ
┣⃞❑⃝🧚‍♂️⃟➥ɢᴏᴏɢʟᴇ
┣⃞❑⃝🧚‍♂️⃟➥ɪᴍᴀɢᴇ
┣⃞❑⃝🧚‍♂️⃟➥ᴄᴏᴜᴘʟᴇᴘᴘ
┣⃞❑⃝🧚‍♂️⃟➥ɪꜱᴡᴀ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "13",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙽𝚂𝙵𝚆 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑✨⃟➤ᴄᴏꜱᴘʟᴀʏ
┃ ├❑✨⃟➤ᴇᴄᴄʜɪ
┃ ├❑✨⃟➤ʜᴇɴᴛᴀɪ
┃ ├❑✨⃟➤ʜᴇɴᴛᴀɪᴠɪᴅ
┃ ├❑✨⃟➤ʀᴀɴᴀʟ
┃ ├❑✨⃟➤ʀᴘᴜꜱꜱʏ
┃ ├❑✨⃟➤ꜱᴏʟᴏ
┃ ├❑✨⃟➤ᴠɪxᴇɴ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "14",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝚁𝙴𝙰𝙲𝙰𝚃𝙸𝙾𝙽 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🎀⃟➤ʙɪᴛᴇ
┃ ├❑🎀⃟➤ʙʟᴜꜱʜ
┃ ├❑🎀⃟➤ᴘᴜɴᴄʜ
┃ ├❑🎀⃟➤ᴘᴀᴛ
┃ ├❑🎀⃟➤ᴋɪꜱꜱ
┃ ├❑🎀⃟➤ᴋɪʟʟ
┃ ├❑🎀⃟➤ʜᴀᴘᴘʏ
┃ ├❑🎀⃟➤ᴅᴀɴᴄᴇ
┃ ├❑🎀⃟➤ʏᴇᴇᴛ
┃ ├❑🎀⃟➤ᴡɪɴᴋ
┃ ├❑🎀⃟➤ꜱʟᴀᴘ
┃ ├❑🎀⃟➤ʙᴏɴᴋ
┃ ├❑🎀⃟➤ʙᴜʟʟʏ
┃ ├❑🎀⃟➤ᴄʀɪɴɢᴇ
┃ ├❑🎀⃟➤ᴄᴜᴅᴅʟᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "15",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙾𝙳𝙴𝚁𝙰𝚃𝙸𝙾𝙽 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑☀⃟➤ᴀᴍᴜᴛᴇ
┃ ├❑☀⃟➤ᴀᴜɴᴍᴜᴛᴇ
┃ ├❑☀⃟➤ᴅᴜɴᴍᴜᴛᴇ
┃ ├❑☀⃟➤ᴅᴍᴜᴛᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "16",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `


┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙶𝙴𝙽 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑💦⃟➤ᴛᴇxᴛ
┃ ├❑💦⃟➤ɪᴍᴀɢᴇ
┃ ├❑💦⃟➤ᴠɪᴅᴇᴏ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "17",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝚆𝙴𝙴𝙱 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┣⃞❑⃝🧚‍♂️⃟➥ᴄʜᴀʀᴀᴄᴛᴇʀ
┣⃞❑⃝🧚‍♂️⃟➥ʀᴀɴɪᴍᴇ
┣⃞❑⃝🧚‍♂️⃟➥ᴀɴɪᴍᴇ
┣⃞❑⃝🧚‍♂️⃟➥ᴀɴɪᴍᴇɴᴇᴡꜱ
┣⃞❑⃝🧚‍♂️⃟➥ᴀɴɪᴍᴇᴘɪᴄ
┣⃞❑⃝🧚‍♂️⃟➥ɴᴇᴋᴏ
┣⃞❑⃝🧚‍♂️⃟➥ᴀɴɪᴍᴇᴡᴀʟʟ
┣⃞❑⃝🧚‍♂️⃟➥ꜰᴏxɢɪʀʟ
┣⃞❑⃝🧚‍♂️⃟➥ʟᴏʟɪ
┣⃞❑⃝🧚‍♂️⃟➥ᴍᴀɴɢᴀ
┣⃞❑⃝🧚‍♂️⃟➥ᴡᴀɪꜰᴜ
┣⃞❑⃝🧚‍♂️⃟➥ᴘᴏᴋᴇᴘɪ
┣⃞❑⃝🧚‍♂️⃟➥ᴘᴏᴋᴇᴍᴏɴ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "18",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙸𝚂𝙲 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┗⃞❑⃝🔖⃟➥ᴘʜᴏᴛᴏ
┗⃞❑⃝🔖⃟➥ϙᴜᴏᴛᴇʟʏ
┗⃞❑⃝🔖⃟➥ꜰᴀɴᴄʏ
┗⃞❑⃝🔖⃟➥ᴛɪɴʏ
┗⃞❑⃝🔖⃟➥ᴛᴏᴀᴜᴅɪᴏ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "20",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙴𝙷𝙸 𝙼𝙴𝙽𝚄
┃ └╼╼╼╼╼╼╼╼╼╼●
┣⃞❑⃝🧚‍♂️⃟➥ᴇʜɪ1
┣⃞❑⃝🧚‍♂️⃟➥ᴇʜɪ2
┣⃞❑⃝🧚‍♂️⃟➥ᴇʜɪ3
┣⃞❑⃝🧚‍♂️⃟➥ᴇʜɪ4
┣⃞❑⃝🧚‍♂️⃟➥ᴇʜɪ5
┣⃞❑⃝🧚‍♂️⃟➥ᴇʜɪ6
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
