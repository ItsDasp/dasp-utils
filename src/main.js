const hugGifs = require('./gifs/hugs');
const kissGifs = require('./gifs/kisses');
const slapGifs = require('./gifs/slaps');
const pokeGifs = require('./gifs/pokes');
const patGifs = require('./gifs/pats');
const cuddleGifs = require('./gifs/cuddles');
const ticklesGifs = require('./gifs/tickles')
const smugGifs = require('./gifs/smugs')
const biteGifs = require('./gifs/bite')
const feedGifs = require('./gifs/feed')
const highFiveGifs = require('./gifs/highfive')


module.exports = {
    hug: function() {
        const randomIndex = Math.floor(Math.random() * hugGifs.length);
        return hugGifs[randomIndex];
    },
    poke: function() {
        const randomIndex = Math.floor(Math.random() * pokeGifs.length);
        return pokeGifs[randomIndex];
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
    },
    cuddle: function() {
        const randomIndex = Math.floor(Math.random() * cuddleGifs.length);
        return cuddleGifs[randomIndex];
    },
    tickle: function() {
        const randomIndex = Math.floor(Math.random() * ticklesGifs.length);
        return ticklesGifs[randomIndex];
    },
    smug: function() {
        const randomIndex = Math.floor(Math.random() * smugGifs.length);
        return ticklesGifs[randomIndex];
    },
    bite: function() {
        const randomIndex = Math.floor(Math.random() * biteGifs.length);
        return biteGifs[randomIndex];
    },
    feed: function() {
        const randomIndex = Math.floor(Math.random() * feedGifs.length);
        return feedGifs[randomIndex];
    },
    highfive: function() {
        const randomIndex = Math.floor(Math.random() * highFiveGifs.length);
        return highFiveGifs[randomIndex];
    },

    allGifs: function() {
        const totalHugGifs = hugGifs.length;
        const totalKissGifs = kissGifs.length;
        const totalSlapGifs = slapGifs.length;
        const totalPokeGifs = pokeGifs.length;
        const totalPatGifs = patGifs.length;
        const totalCuddleGifs = cuddleGifs.length;
        const totalTicklesGifs = ticklesGifs.length;
        const totalSmugsGifs = smugGifs.length;
        const totalBiteGifs = biteGifs.length;
        const totalFeedGifs = feedGifs.length;
        const totalHighFiveGifs = highFiveGifs.length;
        const totalGifs = totalHugGifs + totalKissGifs + totalSlapGifs + totalPokeGifs + totalPatGifs + totalCuddleGifs + totalTicklesGifs + totalSmugsGifs + totalBiteGifs + totalFeedGifs + totalHighFiveGifs;

        return {
            totalHugGifs,
            totalKissGifs,
            totalSlapGifs,
            totalPokeGifs,
            totalPatGifs,
            totalCuddleGifs,
            totalTicklesGifs,
            totalSmugsGifs,
            totalBiteGifs,
            totalFeedGifs,
            totalHighFiveGifs,
            totalGifs
        };
    }
};
