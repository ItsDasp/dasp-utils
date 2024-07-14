# dasp-utils

`dasp-utils` is an npm package that provides URLs of gifs for various interactions such as hugs, kicks, kisses, slaps, pokes, pats, cuddles, tickles, smugs, bites, feeds, and high-fives. Each gif comes with additional information about its name and the anime it comes from, making it ideal for use in Discord bots.

## Installation

You can install `dasp-utils` using npm:

```bash
npm install dasp-utils
```

## Usage

`dasp-utils` can be easily used in Discord bots. Below is an example of how to implement `dasp-utils` in a Discord bot using the `discord.js` library:

```javascript
// Command example using dasp-utils:

const gif = require('dasp-utils');

const patGif = gif.pat();

const embed = new EmbedBuilder()
  .setImage(patGif.url) // Returns the gif URL
  .setFooter({ text: patGif.anime }) // Returns the name of the anime of the gif

await interaction.reply({ embeds: [embed] });
```

## Methods

`dasp-utils` provides the following methods, each of which returns an object with information about the randomly selected gif:

- `hug()`: Returns an object with a random hug gif.
- `poke()`: Returns an object with a random poke gif.
- `kiss()`: Returns an object with a random kiss gif.
- `slap()`: Returns an object with a random slap gif.
- `pat()`: Returns an object with a random pat gif.
- `cuddle()`: Returns an object with a random cuddle gif.
- `tickle()`: Returns an object with a random tickle gif.
- `smug()`: Returns an object with a random smug gif.
- `bite()`: Returns an object with a random bite gif.
- `feed()`: Returns an object with a random feed gif.
- `highfive()`: Returns an object with a random high-five gif.

### Example of Returned Object

Each method returns an object with the following structure:

```json
{
  "name": "Hug18",
  "anime": "Ano Hi Mita Hana no Namae o Bokutachi wa Mada Shiranai",
  "url": "https://i.imgur.com/iKPs2AJ.gif"
}
```

### Total Gifs Information

To get the total number of gifs in each category and overall, use the `allGifs` method:

```javascript
const allGifs = gif.allGifs();
console.log(allGifs);
```

The `allGifs` method returns an object with the total count of gifs in each category and the overall total:

```json
{
  "totalHugGifs": 21,
  "totalKissGifs": 21,
  "totalSlapGifs": 21,
  "totalPokeGifs": 21,
  "totalPatGifs": 21,
  "totalCuddleGifs": 21,
  "totalTicklesGifs": 21,
  "totalSmugsGifs": 21,
  "totalBiteGifs": 21,
  "totalFeedGifs": 21,
  "totalHighFiveGifs": 21,
  "totalGifs": 230
}
```

## Contributing

If you wish to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push your branch to the original repository (`git push origin feature/new-feature`).
5. Create a new Pull Request.

## License

Anyone can use this project, but please give credit, since all the gifs and names were placed manually. There are currently 231 gifs in total.
