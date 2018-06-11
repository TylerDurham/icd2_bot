"use strict";
/* ----------------------------------------------------------------------------------
*   Search Codes Dialog
*   Sample dialog to use as a starting spot for creating bots
*   Or for creating a demo bot
---------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");
const util = require('../util');

const searchCodes = {
    id: 'searchCodes',
    name: 'searchCodes',
    waterfall: [
        (session, args, next) => {
            var msg = session.message.text;
            var matches = msg.match(/^(codes|search codes)\s?(.*)$/i);
            var keywords = matches[matches.length - 1];
            console.log(keywords);
            session.send(`Searching codes for *${keywords}*. Please wait...`);
            var url = `https://icd2functions.azurewebsites.net/api/SearchCodes?code=oJIkArKcpWApzS2xImWgNyOM5xRtUnebTyixbcep7WaGy3WtAghoXg==&k=${keywords}`;
            util.log(`Calling function at ${url}`);
            axios.default.get(url)
                .then((response) => {
               
                var codes = JSON.parse(response.data);
                var list = [];
                codes.codes.forEach(code => {
                    list.push(`\n* ${code.code}: ${code.description}`);
                });
                var msg = 'Here are your results for *' + keywords + ':* \n\n' + list.join('\n');
                session.endDialog(msg);
                util.log(`Finished executing searchCodes.`);
            })
                .catch((err) => {
                console.log(err);
                session.endDialog(`An error has occured: ${err}.`);
            });
        },
    ],
    pattern: /^(codes|search codes)\s?(.*)$/i
};
exports.default = searchCodes;
