const Bot = require('keybase-bot')
async function main() {
    const bot = new.Bot()
    try {
        const username = process.env.USERNAME
        const paperkey = process.env.PAPER_KEY
        await bot.init(username, paperkey)
        console.log(`bot is online as ${bot.myInfo().username}`)
        const channel = {name: 'general'}
        const message = { body: `Hello, I'm ${bot.myInfo().username}`}
        await bot.chat.send(channel, message)
        console.log(`successfully sent the message as ${bot.myInfo().username}`)
    }
    catch (error) {
        console.log(error)
    }
    finally {
        await bot.deinit()
    }
}

main()