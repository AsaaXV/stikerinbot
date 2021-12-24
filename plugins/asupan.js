let handler = async (m, { conn, usedPrefix, command }) => {
  conn.sendFile(m.chat, API('anu', `/asupan/v2/${pickRandom(asupan)}`, {}, 'apikey'), 'asupan.mp4', '© botbang')
}
handler.help = ['asupan']
handler.tags = ['fun']
handler.command = /^(asupan)$/i

module.exports = handler

global.asupan = ["chika","delvira","ayu","bunga","aura","nisa","ziva","yana","viona","syania","riri","syifa","mama_gina","alcakenya","geayubi","santy","ukhty"]
