let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕
│❏ grub Bot
│• https://chat.whatsapp.com/HqtMHDst1KwGpqY8qgtcUA
│• https://chat.whatsapp.com/GIICsXXeHoTAJBqNw2yqMh
│
│❏ SAWERIA
│• https://saweria.co/Entahlah
│
│❏ DANA DAN PULSA
│• 6285240389682
│
╰───────────❏
`.trim(), '© BotBang', 'Menu', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
