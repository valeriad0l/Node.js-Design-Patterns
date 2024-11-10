class UnknownCommand {
    execute(req, res) {
        res.status(404).send('Unknown command');
    }
}

module.exports = UnknownCommand;
