const LOG_PREFIX = (process.env.LOG_PREFIX || 'icd2-bot');

module.exports =  {
    log: function( msg ) {
        console.log(`${LOG_PREFIX} ${msg}`); 
    },

    cleanRawMessageText: function(text) {
        var processedText = text.replace(/\r?\n|\r/g, '').trim();
        processedText = processedText.replace('<at>ICD2</at>', '').trim();
        return processedText;
    }
}