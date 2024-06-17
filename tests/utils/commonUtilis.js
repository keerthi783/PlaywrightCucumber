const fs = require("fs");
const path = require("path");
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('config.properties');

class commonUtilis{

    constructor()
    {
        console.log("common utils constructor accessed");
    }
    async takeScreenshot(imgName)
    {
        var screenshot = await global.page.screenshot({path: "screenshots/"+imgName+".png",fullPage:true});
        return screenshot;
    }
    async getUrl()
    {
        var env = properties.get("env");
        var url;
        switch(env)
        {
            case "test":
                url=properties.get("testUrl");
                break;
            case "uat":
                url=properties.get("testUrl");
                break;
            case "prod":
                url=properties.get("testUrl");
                break;
        }
        console.log("url fetched :"+ url);
        return url;

    }
}

module.exports = commonUtilis