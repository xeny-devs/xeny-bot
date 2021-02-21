import { Client, Discord } from "@typeit/discord";

class Main {

    private client:XenyClient;

    constructor(client:XenyClient) {
        this.client = client;
    }

    public getClient():XenyClient {
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

    
    public getClient():Client {
        return this.client;
    }
    
}