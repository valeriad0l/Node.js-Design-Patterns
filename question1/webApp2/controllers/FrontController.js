const ArtistAlbumCommand = require('./commands/ArtistAlbumCommand');
const UnknownCommand = require('./commands/UnknownCommand');

class FrontController {
    handleRequest(req, res) {
        let command;
        if (req.path.startsWith('/search/artist_album')) {
            const id = parseInt(req.path.split('/').pop()); // Extract the ID from the URL
            command = new ArtistAlbumCommand(id); // Use combined command for both artist and album
        } else {
            command = new UnknownCommand();
        }
        command.execute(req, res);
    }
}

module.exports = new FrontController();


