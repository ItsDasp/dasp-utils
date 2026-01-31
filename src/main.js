const gifs = {
    hug: require('./gifs/hugs'),
    kiss: require('./gifs/kisses'),
    slap: require('./gifs/slaps'),
    poke: require('./gifs/pokes'),
    pat: require('./gifs/pats'),
    cuddle: require('./gifs/cuddles'),
    tickle: require('./gifs/tickles'),
    smug: require('./gifs/smugs'),
    bite: require('./gifs/bite'),
    feed: require('./gifs/feed'),
    highfive: require('./gifs/highfive')
};

const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const api = Object.fromEntries(
    Object.entries(gifs).map(([key, value]) => [key, () => randomFrom(value)])
);

api.allGifs = () => {
    const totals = {};
    let totalGifs = 0;

    for (const [key, value] of Object.entries(gifs)) {
        const count = value.length;
        totals[`total${key.charAt(0).toUpperCase() + key.slice(1)}Gifs`] = count;
        totalGifs += count;
    }

    totals.totalGifs = totalGifs;
    return totals;
};

module.exports = api;