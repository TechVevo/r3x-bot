const Commando = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class RemoveRoleCommand extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'removeroleall',
            description: 'Removes this role for everyone',
            group: 'moderation',
            memberName: 'removeroleall',
        })
    }

    async run(message, args){
        await message.guild.members.fetch().then(members => {
            members.forEach(m => {
                m.roles.remove('846763144293646366').catch(console.error)
            })
        })
    }
}