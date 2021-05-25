const Commando = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class PingCommand extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'ping',
            group: 'misc',
            memberName: 'ping',
            description: 'Ping Command'
        })
    }

    async run(message){
        const embed = new Discord.MessageEmbed()
            .setAuthor('Ping Command')
            .setFooter('R3X Bot')
            .setColor('#000001')
            .setDescription('Calculating ping...')
        message.channel.send(embed).then(result => {
            const ping = result.createdTimestamp - message.createdTimestamp
            const embed = new Discord.MessageEmbed()
                .setAuthor('Ping Command')
                .setFooter('R3X Bot')
                .setColor('#000001')
                .setDescription(`API Ping: ${this.client.ws.ping}\nBot Ping: ${ping}`)
            result.edit(embed)
        })
    }
}