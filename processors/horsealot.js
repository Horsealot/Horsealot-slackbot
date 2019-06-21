const webClient = require('../clients/slack');

module.exports = {
    sendMessageInChannel: async (message) => {
        const result = await webClient.channels.list();

        const activeChannel = result.channels.find((channel) => {
            return channel.name === message.channel;
        });
        if(!activeChannel) {
            throw new Error(`Channel ${message.channel} not found`)
        }

        await webClient.chat.postMessage({
            text: message.content,
            channel: activeChannel.id,
        });
    }
}
