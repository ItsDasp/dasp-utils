<a href="https://instagram.com/xidasp">
  <img src="https://i.imgur.com/XWoG0rI.jpeg" alt="Banner" style="width: 200%; max-width: 3048px;">
</a>

# dasp-utils

<p>
  <a href="https://www.npmjs.com/package/dasp-utils"><img src="https://img.shields.io/npm/v/dasp-utils.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/dasp-utils"><img src="https://img.shields.io/npm/dw/dasp-utils.svg" alt="npm downloads/week"></a>
  <a href="https://github.com/ItsDasp/dasp-utils"><img src="https://img.shields.io/github/issues/ItsDasp/dasp-utils.svg" alt="github issues"></a>
</p>

`dasp-utils` is an npm package that provides URLs of gifs for various interactions. Such as hugs, kicks, kisses and more. Each gif comes with the name of the anime it comes from! making it ideal for Discord Bots.


## Installation
You can use dasp-utils in your project using npm:
```js
npm install dasp-utils 
```


## Quick start

- **Install:** run `npm install dasp-utils`
- **Require:** import the package and call any action to get a random gif object.

## Usage

CommonJS example:

```js
const dasp = require('dasp-utils');

// each export is a function that returns a random gif object
const hug = dasp.hug();
console.log(hug);
/* It returns -> {
  name: 'Hug10',
  anime: 'Love Live!',
  url: 'https://i.imgur.com/GuADSLm.gif'
} */

// totals about the collection
console.log(dasp.allGifs());
/* It returns -> { totalHugGifs: x, totalKissGifs: x, ..., totalGifs: x } */
```

If you use ESM or a bundler, import the default `require`-style export similarly.

## API

- `hug()` — returns a random hug gif object.
- `kiss()` — returns a random kiss gif object.
- `slap()` — returns a random slap gif object.
- `poke()` — returns a random poke gif object.
- `pat()` — returns a random pat gif object.
- `cuddle()` — returns a random cuddle gif object.
- `tickle()` — returns a random tickle gif object.
- `smug()` — returns a random smug gif object.
- `bite()` — returns a random bite gif object.
- `feed()` — returns a random feed gif object.
- `highfive()` — returns a random highfive gif object.
- `allGifs()` — returns counts per-action and a `totalGifs` value.

Returned gif object shape:

```
{
  name: string,   // a short identifier
  anime: string,  // source anime (when available)
  url: string     // direct gif URL
}
```

## Example: Discord (discord.js)

Friendly quick example showing how to use `dasp-utils` in a bot command:

```js
// discord.js v14 (slash command)
const { EmbedBuilder } = require('discord.js');
const dasp = require('dasp-utils');

module.exports = {
  data: { name: 'hug' }, // replace with SlashCommandBuilder in your bot
  async execute(interaction) {
    const gif = dasp.hug();
    const embed = new EmbedBuilder()
      .setTitle('A warm hug for you 🤗')
      .setDescription(`From: ${gif.anime ?? 'unknown'}`) // Unknown just in case lol
      .setImage(gif.url)
      .setColor(0xffaaff);

    await interaction.reply({ embeds: [embed] });
  }
};
```

### Screenshot & example

Here is an example of my bot using the package and the exact gif object returned for a `pat` action.

![bot example](https://i.imgur.com/E9iU6T6.png)

Example gif object (for `pat`):

```json
{
    "name": "Pat1",
    "anime": "Senpai Ga Uzai Kouhai No Haneshi",
    "url": "https://i.pinimg.com/originals/4c/03/bb/4c03bbe17bc0825e064d049c5f8262f3.gif"
}
```

## Available actions

This package exposes one function per interaction (see API section). Use whichever fits your bot or app.

## Contributing

- Open an issue or submit a PR on GitHub.
- Add gifs as objects with `{ name, anime, url }` into `src/gifs/` and update exports if needed.
- Keep sources attributed and respect the original copyright and hosting terms.

## License

This project is licensed under `CC-BY-4.0` — see `package.json` for details.