const express = require('express');
const path = require('path');
const frontController = require('./controllers/FrontController');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to render the search form
app.get('/search', (req, res) => {
    res.render('search');
});

// Route to handle search results
app.get('/search/artist_album/:id', (req, res) => {
    frontController.handleRequest(req, res);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`App 2 listening on port ${PORT}`));


