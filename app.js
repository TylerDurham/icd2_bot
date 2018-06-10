require('dotenv').config();


var restify = require('restify');
var botbuilder = require('botbuilder');
var bot = require('./bot');
var util = require('./util');

const PORT = (process.env.PORT || process.env.port || 3978);
const server = restify.createServer();

server.post('/api/messages', bot.default.connector('*').listen());

server.listen(PORT, () => {
    util.log(`ICD2Bot service is listening on port ${PORT}.`);
})