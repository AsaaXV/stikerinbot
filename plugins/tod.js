let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
  if (/^tod$/i.test(command)) {
    await conn.send3Button(m.chat, 'Truth or Dare', '© BotBang', 'Truth', `${usedPrefix}truth`, 'Dare', `${usedPrefix}dare`, 'Acak', `${pickRandom([`${usedPrefix}dare`, `${usedPrefix}truth`])}`, m)
  }
  if (/^truth$/i.test(command)) {
    let res = await fetch(API('mel', '/truth', {}, 'apikey'))
    if (!res.ok) throw eror
    let result = await res.json()
    let json = result.result
    await conn.send2Button(m.chat, json.result, '© BotBang', 'Truth', `${usedPrefix}truth`, 'Dare', `${usedPrefix}dare`, m)

  }
  if (/^dare$/i.test(command)) {
    let res = await fetch(API('mel', '/dare', {}, 'apikey'))
    if (!res.ok) throw eror
    let result = await res.json()
    let json = result.result
    await conn.send2Button(m.chat, json.result, '© BotBang', 'Truth', `${usedPrefix}truth`, 'Dare', `${usedPrefix}dare`, m)

  }
}
handler.help = ['tod']
handler.tags = ['fun']
handler.command = /^(tod|truth|dare)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}