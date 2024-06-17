const fs = require('fs');
const fetch = require('node-fetch');
const https = require('https');
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('config.properties');

class UserDetails
{
    constructor(){

    }

    async postUserDetails(){
        const httpAgent = new https.Agent({rejectUnauthorized : false});
        const path = properties.get('baseUrl');
        const path1 = "/public/v2/graphql";
    }
}