const fs = require('fs-extra');
const { Builder } = require('xml2js'); // Import Builder from xml2js

const cucumberJsonPath = 'allure-results/cucumber.json'; // Adjust the path to your cucumber.json file
const outputXmlPath = 'converted/cucumber.xml'; // Adjust the output XML file path as needed

// Function to sanitize JSON keys for XML compatibility
function sanitizeForXml(key) {
    // Replace or remove invalid characters
    // Remove leading digits
    key = key.replace(/^[0-9]/, '');
    // Replace spaces with underscores and remove other invalid characters
    return key.replace(/[^a-zA-Z0-9_]/g, '_');
}

async function convertJsonToXml() {
    try {
        // Read the JSON file
        const jsonData = await fs.readFile(cucumberJsonPath, 'utf8');
        const jsonContent = JSON.parse(jsonData);

        // Sanitize keys in the JSON content
        const sanitizedJson = sanitizeKeys(jsonContent);

        // Convert JSON to XML using xml2js
        const builder = new Builder();
        const xmlData = builder.buildObject(sanitizedJson);

        // Write XML to file
        await fs.outputFile(outputXmlPath, xmlData);

        console.log('Conversion completed successfully.');
    } catch (error) {
        console.error('Error converting JSON to XML:', error.message);
    }
}

// Function to recursively sanitize JSON keys
function sanitizeKeys(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // Handle arrays
    if (Array.isArray(obj)) {
        return obj.map(item => sanitizeKeys(item));
    }

    // Handle objects
    const sanitizedObj = {};
    for (let key in obj) {
        const sanitizedKey = sanitizeForXml(key);
        sanitizedObj[sanitizedKey] = sanitizeKeys(obj[key]);
    }
    return sanitizedObj;
}

// Execute the conversion function
convertJsonToXml();