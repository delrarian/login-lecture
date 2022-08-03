const winston = require("winston");
// const { createLogger, transports, format } = require('winston');

const opts = {
    
    file: new winston.transports.File({ 
        filename: 'combined.log',
        dirname: "./logs"
        }),
    
    console: new winston.transports.Console(),
}

const logger = winston.createLogger({
    transports: [ opts.file],
});

if(process.env.NODE_ENV !== "production"){
    logger.add(opts.console);
};

module.exports = logger;