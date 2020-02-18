import { RichEmbed } from 'discord.js';
module.exports = {
  name: 'ping',
  category: 'info',
  description: 'Returns latency and API ping',
  run: async (client: any, message: any, args: any) => {
    await message.channel.send(
      new RichEmbed()
        .setTitle('Ping')
        .setColor('#f9ff35')
        .setDescription(`API Latency is ${client.ping}ms`)
    );
  }
};
