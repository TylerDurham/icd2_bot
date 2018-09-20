var builder = require('botbuilder');

var helpDialog = require('./dialogs/greetings');
var searchCodesDialog = require('./dialogs/searchcodes');
var util = require('./util')

// Bot Storage: Here we register the state storage for your bot. 
// Default store: volatile in-memory store - Only for prototyping!
// We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
// For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
var inMemoryStorage = new builder.MemoryBotStorage();

const bot = new builder.UniversalBot(
    new builder.ChatConnector({
        appId: process.env.MICROSOFT_APP_ID,
        appPassword: process.env.MICROSOFT_APP_PASSWORD
    }),
    searchCodesDialog.default.waterfall
).set('storage', inMemoryStorage);


// Load dialogs
bot.dialog(helpDialog.default.id, helpDialog.default.waterfall).triggerAction({ matches: helpDialog.default.pattern });
bot.dialog(searchCodesDialog.default.id, searchCodesDialog.default.waterfall).triggerAction({ matches: searchCodesDialog.default.pattern });

exports.default = bot;