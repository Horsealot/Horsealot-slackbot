var HorsealotProcessor = require("../processors/horsealot");

module.exports = {
    dispatch: async (message) => {
        switch (message.action) {
            case "newProSubscription":
                try {
                    await HorsealotProcessor.newProSubscription(message);
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
