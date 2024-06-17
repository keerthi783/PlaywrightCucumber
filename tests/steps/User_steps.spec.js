const { Given, Then } = require('@cucumber/cucumber');
const axios = require('axios');

let response;
let userData;

/* I have implemented the below GRAPHQL API
curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" -XPOST "https://gorest.co.in/public/v2/graphql" -d '{"query":"query{user(id: 6940083) { id name email gender status }}"}'
*/

Given('I perform a GraphQL POST request to {string} with query', async function (endpoint, query) {
    try {
        const requestBody = {
            query: query.trim()
        };

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ACCESS_TOKEN' 
        };

        response = await axios.post(`https://gorest.co.in/public/v2/graphql`, requestBody, {
            headers: headers
        });

        // Check if the request was successful
        if (response.status !== 200) {
            throw new Error(`Failed to make GraphQL POST request to ${endpoint}: Status ${response.status}`);
        }

        userData = response.data.data.user; // Store user data from response
    } catch (error) {
        throw new Error(`Failed to make GraphQL POST request to ${endpoint}: ${error.message}`);
    }
});

Then('the response status code should be {int}', function (statusCode) {
    if (response.status !== statusCode) {
        throw new Error(`Expected status code ${statusCode} but got ${response.status}`);
    }
});

Then('the response body should contain user details', function () {
    if (!userData || !userData.id || !userData.name || !userData.email || !userData.gender || !userData.status) {
        throw new Error('Expected response body to contain complete user details');
    }
});
