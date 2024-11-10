class ColorConsole {
    log(message) {}
}

class RedConsole extends ColorConsole {
    log(message) {
        console.log('\x1b[31m%s\x1b[0m', message); // Red color
    }
}

class BlueConsole extends ColorConsole {
    log(message) {
        console.log('\x1b[34m%s\x1b[0m', message); // Blue color
    }
}

class GreenConsole extends ColorConsole {
    log(message) {
        console.log('\x1b[32m%s\x1b[0m', message); // Green color
    }
}

class YellowConsole extends ColorConsole {
    log(message) {
        console.log('\x1b[33m%s\x1b[0m', message); // Yellow color
    }
}

function colorConsoleFactory(color)  {
    switch (color.toLowerCase()) {
        case 'red':
            return new RedConsole();
        case 'blue':
            return new BlueConsole();
        case 'green':
            return new GreenConsole();
        case 'yellow':
            return new YellowConsole();
        default:
            throw new Error('Invalid color');
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a color (red, blue, green, yellow): ', (color) => {
    rl.question('Enter a message to log: ', (message) => {
        try {
            const colorConsole = colorConsoleFactory(color);
            colorConsole.log(message);
        } catch (error) {
            console.log(error.message);
        }
        rl.close();
    });
});

