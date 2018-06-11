const LOG_PREFIX = (process.env.LOG_PREFIX || 'icd2-bot');

module.exports =  {
    log: function( msg ) {
        console.log(`${LOG_PREFIX} ${msg}`); 
    }
}