import { Client, Discord } from "@typeit/discord";
import { start } from "repl";

class Main {

    private client:XenyClient;

    constructor(client:XenyClient) {
        this.client = client;
    }

    public get getClient():XenyClient {
        return this.client
    }
    
}

class XenyClient {

    private token:string;
    private client:Client;

    constructor(token:string) {
        this.token = token;
        this.client.login(token);
    }

    
    public get getClient():Client {
        return this.client;
    }
    

}