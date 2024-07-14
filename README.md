---

# dasp-utils

`dasp-utils` is an npm package that provides URLs of gifs for various interactions such as hugs, kicks, kisses, slaps, and pats. Each gif comes with additional information about its name and the anime it comes from, making it ideal for use in Discord bots.

## Installation

You can install `dasp-utils` using npm:

```bash
npm install dasp-utils or git clone https://github.com/ItsDasp/dasp-utils
```

## Usage

`dasp-utils` can be easily used in Discord bots. Below is an example of how to implement `dasp-utils` in a Discord bot using the `discord.js` library:

```javascript
//Command like Nekotina:

const gif = require('dasp-utils');

const patGif = gif.pat();

const embed = new EmbedBuilder();
.setImage(patGif.url) // Returns the gif URL
.setFooter(patGif.anime) // Returns the name of the anime of the gif.

await interaction.reply({embeds: [embed]})
```

## Methods

`dasp-utils` provides the following methods, each of which returns an object with information about the randomly selected gif:

- `hug()`: Returns an object with a random hug gif.
- `poke()`: Returns an object with a random poke gif.
- `kiss()`: Returns an object with a random kiss gif.
- `slap()`: Returns an object with a random slap gif.
- `pat()`: Returns an object with a random pat gif.

### Example of Returned Object

Each method returns an object with the following structure:

```json
{
  "name": "Hug18",
  "anime": "Ano Hi Mita Hana no Namae o Bokutachi wa Mada Shiranai",
  "url": "https://i.imgur.com/iKPs2AJ.gif"
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

Anyone can use this project, but please! give credits, since all the gifs and names we're placed manually. there's actually 231 gifs on total.

---

I hope this README is useful for your project. If you have any other requests or need more information, feel free to ask.
