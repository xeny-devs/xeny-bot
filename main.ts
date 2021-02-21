import { Client, Command, CommandMessage, CommandNotFound, Discord, On, Once } from "@typeit/discord";

class Main {

    private client:Client;

    constructor(client:Client) {
        this.client = client;
    }

    public getClient():Client {
        return this.client
    }
    
}

async function start(token:string) {
    const client = new Client({
        classes: [
            `${__dirname}/*Discord.ts`,
            `${__dirname}/*Discord.js`
        ],
        silent: false,
        variablesChar: ":"
    });

    await client.login(token);
}

start("YOUR_TOKEN (COMING SOON)");

@Discord("+")
abstract class AppDiscord {
    @Command("test")
    private test(message:CommandMessage) {
        message.channel.send("It worked!");
    }

    @CommandNotFound()
    private notFound(message:CommandMessage) {
        message.channel.send("Unexpected command!");
    }
}