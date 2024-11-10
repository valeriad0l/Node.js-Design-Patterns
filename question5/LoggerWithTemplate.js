const fs = require('fs');

class BaseLogger {
    info(message) {
        this.log('INFO', message);
    }

    warn(message) {
        this.log('WARN', message);
    }

    debug(message) {
        this.log('DEBUG', message);
    }

    error(message) {
        this.log('ERROR', message);
    }

    log(level, message) {
        const formattedMessage = `[${level}] ${message}`;
        this.write(formattedMessage);
    }

    //abstract method for subclasses implementation
    write(formattedMessage) {
        throw new Error("write() method must be implemented by subclass");
    }
}

class ConsoleLogger extends BaseLogger {
    write(formattedMessage) {
        console.log(formattedMessage);
    }
}

class FileLogger extends BaseLogger {
    constructor(filename) {
        super();
        this.filename = filename;
    }

    write(formattedMessage) {
        fs.appendFileSync(this.filename, formattedMessage + '\n', 'utf8');
    }
}


//Testing
const consoleLogger = new ConsoleLogger();
consoleLogger.info("Info message to console");
consoleLogger.warn("Warning message to the console");
consoleLogger.error("Error message to the console");
consoleLogger.debug("Debug message to the console");

const fileLogger = new FileLogger('templated_log.txt');
fileLogger.info("Info message to the file");
fileLogger.warn("Warning message to the file");
fileLogger.error("Error message to the file");
fileLogger.debug("Debug message to the file");