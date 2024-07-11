const gifs = require('./src/main')


const gif = gifs.hug()
const gifName = gif.name;
const gifAnime = gif.anime;
const gifUrl = gif.url;

console.log(`${gifName} (${gifAnime}) (${gifUrl})`);