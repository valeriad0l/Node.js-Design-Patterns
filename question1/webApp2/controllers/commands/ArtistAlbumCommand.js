const Artist = require('../../../models/Artist');
const Album = require('../../../models/Album');

class ArtistAlbumCommand {
    constructor(id) {
        this.id = id;
        this.artists = [
            new Artist(1, 'The Rolling Stones', 'Rock'),
            new Artist(2, 'Miles Davis', 'Jazz'),
            new Artist(3, 'Taylor Swift', 'Pop'),
            new Artist(4, 'Beethoven', 'Classical')
        ];
        this.albums = [
            new Album(1, 'Let It Bleed', 1, 'Rock', 1969),
            new Album(2, 'Sticky Fingers', 1, 'Rock', 1971),
            new Album(3, 'Kind of Blue', 2, 'Jazz', 1959),
            new Album(4, 'Bitches Brew', 2, 'Jazz', 1970),
            new Album(5, '1989', 3, 'Pop', 2014),
            new Album(6, 'Folklore', 3, 'Pop', 2020),
            new Album(7, 'Symphony No. 9', 4, 'Classical', 1824),
            new Album(8, 'Fidelio', 4, 'Classical', 1814)
        ];
    }

    execute(req, res) {
        const artist = this.artists.find(a => a.id === this.id);
        const albums = this.albums.filter(a => a.artistId === this.id); // Get all albums for the artist

        if (artist || albums.length > 0) {
            res.render('artist_album', { artist, albums });
        } else {
            res.status(404).send('Artist or album not found');
        }
    }
}

module.exports = ArtistAlbumCommand;