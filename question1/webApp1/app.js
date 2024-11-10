const express = require('express');
const path = require('path');
const artistController = require('./controllers/ArtistController');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to render the search form
app.get('/search', (req, res) => {
    res.render('search');
});

// Route to handle search query and display artist information
app.get('/search/artist', (req, res) => {
    const artistName = req.query.artistName;
    const artist = artistController.findArtistByName(artistName); // Search for artist by name
    if (artist) {
        res.render('artist', { artist });
    } else {
        res.render('artist', { artist: null });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`App 1 listening on port ${PORT}`));