const Bot = require("keybase-bot");
require("dotenv").config();

async function main() {
  const bot = new Bot();
  try {
    const username = process.env.USERNAME;
    const paperkey = process.env.PAPER_KEY;

    await bot.init(username, paperkey, { verbose: false });
    console.log(`I have logged in as ${bot.myInfo().username}`);
    const channel = { name: "general" };
    const message = { body: `Hello, I'm ${bot.myInfo().username}` };
    await bot.chat.send(channel, message);
    console.log(
      `Successfully sent the message as ${
        bot.myInfo().username
      } from the device ${bot.myInfo().devicename}`
    );
  } catch (err) {
    console.log(err);
  } finally {
    await bot.deinit();
  }
}

main();
