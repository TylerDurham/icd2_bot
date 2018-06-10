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
            const botName = 'icd2_bot';
            const description = `Assist users with ICD10 codes.`;
            session.send(`Hi there! I'm ${botName}`);
            session.send(`In a nutshell, here's what I can do:\n\n${description}`);
            builder.Prompts.text(session, `What's your name?`);
        },
        (session, results, next) => {
            session.endConversation(`Welcome, ${results.response}`);
        },
    ]
};
exports.default = greetings; 
