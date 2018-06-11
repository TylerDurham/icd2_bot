"use strict";
/* ----------------------------------------------------------------------------------
*   Greetings Dialog
*   Sample dialog to use as a starting spot for creating bots
*   Or for creating a demo bot
---------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", { value: true });
const builder = require("botbuilder");
const greetings = {
    id: 'greetings',
    name: 'greetings',
    waterfall: [
        (session, args, next) => {
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
