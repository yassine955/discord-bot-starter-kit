module.exports = {
  name: 'ping',
  category: 'info',
  description: 'Returns latency',
  run: async (client, message, args) => {
    await message.channel.send(`API ${Math.round(client.ping)}ms`);
  }
};
