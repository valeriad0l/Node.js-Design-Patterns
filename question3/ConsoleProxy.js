const consoleProxy = new Proxy(console, {
    get(target, propKey) {
        //get original console method (log, error, info, debug)
        const originalMethod = target[propKey];

        //if method exists, wrap to add the timestamp
        if (typeof originalMethod === 'function') {
            return function (...args) {
                const timestamp = `[${new Date().toISOString()}]`;
                originalMethod.apply(target, [timestamp, ...args]);
            };
        }

        return originalMethod;
    }
});

consoleProxy.log('Hello, World!');
consoleProxy.error('An error occurred!');
consoleProxy.info('This is an info log');
consoleProxy.debug('Debugging...');