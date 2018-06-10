const LOG_PREFIX = (process.env.LOG_PREFIX || '>>> ');

module.exports =  {
    log: function( msg ) {
        console.log(`${LOG_PREFIX} ${msg}`);
    }
}