let fs = require('fs')
let fetch = require('node-fetch')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    let setting = global.DATABASE.data.settings

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╭─❏〘 BELI BOT 〙
│➤ *1 Bulan* :      *Rp 20000*
│➤ *Permanen* : *Rp 30000*
│➤ *Premium* :   *Rp 20000*
╰────❏
╭─❏〘 PEMBAYARAN 〙
│➤ Dana :
│• 6285240389682
│➤ Pulsa :
│• 6285240389682
╰────❏
╭─❏ 〘 INFO 〙
│➤ Tertarik Untuk Sewa Bot Ini?
│➤ Ketuk Tombol Di Bawah Ya
╰────❏
╭─❏〘 CREATOR 〙
│➤ ©2021 Rpg BotBang
│➤ Scrip original by Nurutomo
╰────❏〘 BOT BANG 〙`.trim(), '© BotBang', 'Owner', '#owner', 'Menu', '#menu', m)
    }

    // salam
    let reg = /(assalam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }

    // backup DATABASE
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', false, false, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

}

module.exports = handler
