var HorsealotProcessor = require("../processors/horsealot");

module.exports = {
    dispatch: async (message) => {
        switch (message.action) {
            case "sendMessageInChannel":
                try {
                    await HorsealotProcessor.sendMessageInChannel(message);
                } catch (e) {
                    console.error(`[Dispatcher][${message.transactionId}] Exception ${e}`)
                }
                console.log("[Dispatcher][%s] Processed", message.transactionId);
                return;
            default :
                console.log(`[Dispatcher][${message.transactionId}] Unknown action ${message.action}`);

        }
    }
}
