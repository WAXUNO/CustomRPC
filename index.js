var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Jigsaw is a fun game",
assets : {
large_image : "large",
large_text : "Playing a Jigsaw game" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Subscribe" , url : "https://www.youtube.com/channel/UCThRWnwmkRlxNLuHKaWtxlA"},{label : "Click here for fun",url : "https://youtu.be/dQw4w9WgXcQ"}]
}
})
})
client.login({ clientId : "837977081198805022" }).catch(console.error);