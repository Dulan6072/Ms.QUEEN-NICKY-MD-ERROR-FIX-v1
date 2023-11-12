const { cmd, fetchJson } = require('../lib');

cmd(
    {
        pattern: "whmod", // Change the command pattern to something you prefer
        react: "🧩",      
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fouadwa-scraper`);

            // Send the APK file
            await Void.sendMessage(
                citel.chat,
                {
                    *┏━[ _🐉QUEEN-NICKY-MD🐉_ ]─❂*\n\n*┣━( _🥏 ғᴏᴜɴᴅᴡᴀ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ⬇️_ )* \n\n*┃⿻* *📦 ᴘᴀᴄᴋᴀɢᴇs :* 

      *❂.* _com_whatsapp_ 
      *❂.* _com_fmwhatsapp_ 
      *❂.* _com_gbwhatsapp_ 
      *❂.* _com_yowhatsapp_\n\n*┗━━━━━━━━━━━━━━◆*\n\nQᴜᴇᴇɴ-ɴɪᴄᴋʏ-ᴍᴅ ⦁\n  ©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ᴅᴜᴍɪᴅᴜ'
                },
                { quoted: citel }
            );

            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_whatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_whatsapp.name,
                    caption: 'QUEEN-NICKY-MD'
                },
                { quoted: citel }
            );

            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_fmwhatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_fmwhatsapp.name,
                    caption: 'QUEEN-NICKY-MD'
                },
                { quoted: citel }
            );

            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_gbwhatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_gbwhatsapp.name,
                    caption: 'QUEEN-NICKY-MD'
                },
                { quoted: citel }
            );

            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_yowhatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_yowhatsapp.name,
                    caption: 'QUEEN-NICKY-MD'
                },
                { quoted: citel }
            );




        } catch (error) {
            citel.reply(error.toString()); // Convert the error to a string before sending
        }
    }
);
