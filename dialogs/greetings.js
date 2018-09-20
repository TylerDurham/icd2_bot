const builder = require("botbuilder");
const util = require('../util');

const greetings = {
    id: 'greetings',
    name: 'greetings',
    pattern: /help/i,
    waterfall: [
        (session, args, next) => {
            var msg = session.message.text;
            console.log(msg);

            const botName = '**ICD2**';
            const description = `Assist users with ICD10 codes.`;
            session.send(`Hi there! I'm ${botName}! In a nutshell, I can assist users with finding ICD10 codes.`);
            var msg = `Here are some sample commands you can use: 
            \n
            \n Query for codes using the command *search codes*, then specifying keywords:
            \n\t search codes edema orbit
            \n\t search codes obstruction newborn
            \n
            \n You can also search for phrases by closing in quotes:
            \n\t search codes "central nervous system"
            \n
            \n You can also combine keywords and phrases:
            \n\t search codes "central nervous system" neoplasm
            `;

            session.endDialog(msg);
        }
    ]
};
exports.default = greetings; 
