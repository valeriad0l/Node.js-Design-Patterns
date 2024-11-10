const Artist = require('../../models/Artist');

class ArtistController {
    constructor() {

        this.artists = [
            new Artist(1, 'The Rolling Stones', 'Rock'),
            new Artist(2, 'Miles Davis', 'Jazz'),
            new Artist(3, 'Taylor Swift', 'Pop'),
            new Artist(4, 'Beethoven', 'Classical')
        ];
    }

    getArtistInfo(req, res) {
        const artistId = parseInt(req.params.id);
        const artist = this.artists.find(a => a.id === artistId);
        if (artist) {
            res.render('artist', { artist });
        } else {
            res.status(404).send('Artist not found');
        }
    }

    findArtistByName(artistName) {
        return this.artists.find(a => a.name.toLowerCase() === artistName.toLowerCase());
    }
}

module.exports = new ArtistController();
