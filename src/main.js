const hugGifs = require('./gifs/hugs');
const kickGifs = require('./gifs/pokes');
const kissGifs = require('./gifs/kisses');
const slapGifs = require('./gifs/slaps');
const pokesGifs = require('./gifs/pokes');

module.exports = {
    hug: function() {
        const randomIndex = Math.floor(Math.random() * hugGifs.length);
        return hugGifs[randomIndex];
    },
    poke: function() {
        const randomIndex = Math.floor(Math.random() * pokesGifs.length);
        return kickGifs[randomIndex];
    },
    kiss: function() {
        const randomIndex = Math.floor(Math.random() * kissGifs.length);
        return kissGifs[randomIndex];
    },
    slap: function() {
        const randomIndex = Math.floor(Math.random() * slapGifs.length);
        return slapGifs[randomIndex];
    },
    pat: function() {
        const randomIndex = Math.floor(Math.random() * patGifs.length);
        return patGifs[randomIndex];
    }
};