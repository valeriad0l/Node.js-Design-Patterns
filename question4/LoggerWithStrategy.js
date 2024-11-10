const fs = require('fs');

class Logger {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    debug(message) {
        this.strategy.log('DEBUG', message);
    }

    info(message) {
        this.strategy.log('INFO', message);
    }

    warn(message) {
        this.strategy.log('WARN', message);
    }

    error(message) {
        this.strategy.log('ERROR', message);
    }
}

class ConsoleStrategy {
    log(level, message) {
        console.log(`[${level}] ${message}`);
    }
}

class FileStrategy {
    constructor(filename) {
        this.filename = filename;
    }

    log(level, message) {
        const logMessage = `[${level}] ${message}\n`;
        fs.writeFileSync(this.filename, logMessage, { flag: 'a' }); // overwrites if flag is not 'a'
    }
}

//Testing
const consoleLogger = new Logger(new ConsoleStrategy());
consoleLogger.info("Logging to the console");
consoleLogger.warn("This is a console warning!");
consoleLogger.error("Console error occurred");

const fileLogger = new Logger(new FileStrategy('log.txt'));
fileLogger.info("Logging to a file");
fileLogger.warn("This is a file warning!");
fileLogger.error("File error occurred");

consoleLogger.setStrategy(new FileStrategy('log.txt'));
consoleLogger.debug("Debug message now logged to the file");