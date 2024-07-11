Here is the README in English:

---

# dasp-utils

`dasp-utils` is an npm package that provides URLs of gifs for various interactions such as hugs, kicks, kisses, slaps, and pats. Each gif comes with additional information about its name and the anime it comes from, making it ideal for use in Discord bots.

## Installation

You can install `dasp-utils` using npm:

```bash
npm install dasp-utils
```

## Usage

`dasp-utils` can be easily used in Discord bots. Below is an example of how to implement `dasp-utils` in a Discord bot using the `discord.js` library:

```javascript
const { Client, GatewayIntentBits } = require("discord.js");
const daspUtils = require("dasp-utils");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  if (message.content.startsWith("!hug")) {
    const hugGif = daspUtils.hug();
    message.channel.send(
      `Here's a hug for you, ${message.author.username}! \n**Anime**: ${hugGif.anime} \n${hugGif.url}`
    );
  }

  if (message.content.startsWith("!pat")) {
    const patGif = daspUtils.pat();
    message.channel.send(
      `Here's a pat for you, ${message.author.username}! \n**Anime**: ${patGif.anime} \n${patGif.url}`
    );
  }

  if (message.content.startsWith("!kiss")) {
    const kissGif = daspUtils.kiss();
    message.channel.send(
      `Here's a kiss for you, ${message.author.username}! \n**Anime**: ${kissGif.anime} \n${kissGif.url}`
    );
  }

  if (message.content.startsWith("!slap")) {
    const slapGif = daspUtils.slap();
    message.channel.send(
      `Here's a slap for you, ${message.author.username}! \n**Anime**: ${slapGif.anime} \n${slapGif.url}`
    );
  }

  if (message.content.startsWith("!poke")) {
    const pokeGif = daspUtils.poke();
    message.channel.send(
      `Here's a poke for you, ${message.author.username}! \n**Anime**: ${pokeGif.anime} \n${pokeGif.url}`
    );
  }
});

client.login("YOUR_DISCORD_BOT_TOKEN");
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

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

I hope this README is useful for your project. If you have any other requests or need more information, feel free to ask.
# dasp-utils
