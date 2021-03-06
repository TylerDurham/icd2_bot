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
            util.log(keywords);
            session.send(`Searching codes for *${keywords}*. Please wait...`);
            var url = `${process.env.URL_FUNC_SEARCH_CODES}&k=${encodeURIComponent(keywords)}`;
            util.log(`Calling function at ${url}`);
            axios.default.get(url)
                .then((response) => {
               
                    var codes = JSON.parse(response.data);
                    var count = codes.codes.length;
                    util.log(`${count} codes retreived from service.`);

                    if(count < 1) {
                        var msg = `Sorry! I found 0 results for *${keywords}. Please try another search.`
                        session.endDialog(msg);
                    } else {
                        var list = [];
                        codes.codes.forEach(code => {
                            list.push(`\n* ${code.code}: ${code.description}`);  
                        });
                        var msg = `Success! Here are ${count} results for *${keywords}:* \n\n` + list.join('\n');
                        session.endDialog(msg);
                    }

                    util.log(`Finished executing searchCodes.`);
                })
                .catch((err) => {
                console.log(err);
                session.endDialog(`An error has occured: ${err}.`);
            });
        },
    ],
    pattern: /^(codes|search codes)\s?(.*)$/gim   //// /^(codes|search codes)\s?(.*)$/gim
};
exports.default = searchCodes;
