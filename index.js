 const Commando = require('discord.js-commando')

 const path = require('path')

 require('dotenv-flow').config()
 const token = process.env.TOKEN
 const prefix = process.env.PREFIX

 const client = new Commando.CommandoClient({
     commandPrefix: prefix,
     owner: '789500359789772861'
 })

 client.on('ready', () => {
     console.log(`${client.user.tag} is Ready!`)

     client.user.setPresence({
         activity:{
             name: '.help | Made with 💖 by Sri Hari',
             type: 'PLAYING'
         }
     })

     client.registry
        .registerDefaultTypes()
        .registerGroups([
            ['misc', 'Misc Commands'],
            ['moderation', 'Moderation Commands']
        ])
        .registerCommandsIn(path.join(__dirname, 'commands'))
 })
 
 client.login(token)