let handler = async (m, { conn }) => {
    let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]
    const chats = conn.chats.all()
    const groups = chats.filter(v => v.jid.endsWith('g.us'))
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    m.reply(`
*╭─❏ •❗「 STATUS 」*
*│➤ AKTIF SELAMA : ${uptime}*
*│➤ BATERAIi : ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}*
*│➤ GRUP : ${groups.length}*
*│➤ CHAT PRIBADI : ${chats.length - groups.length}*
*│➤ PENGGUNA : ${Object.keys(global.db.data.users).length}*
*│➤ JADI BOT : ${totaljadibot.length}*
*│➤ TERBLOCK : ${conn.blocklist.length}*
*│➤ CHAT TERBANNED : ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}*
*│➤ PENGGUNA TERBANNED : ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}*
*╰───────❏*

*╭─❏ •❗「 INFO BOT 」"
*│➤ ANON CHAT : ${anon ? '✅' : '❌'}*
*│➤ ANTI CALL : ${anticall ? '✅' : '❌'}*
*│➤ ANTI SPAM ${antispam ? '✅' : '❌'}*
*│➤ ANTI TROLI : ${antitroli ? '✅' : '❌'}*
*│➤ AUTO BACUP DB : ${backup ? '✅' : '❌'}*
*│➤ MODE GRUP : ${groupOnly ? '✅' : '❌'}*
*│➤ JADI BOT : ${jadibot ? '✅' : '❌'}*
*│➤ MODE NSFW : ${nsfw ? '✅' : '❌'}*
*╰─────────────❏*
    `.trim())
}
handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^botstat(us)?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}