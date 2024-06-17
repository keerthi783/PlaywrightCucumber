Feature: API Test - Execute GraphQL Query
  As a user
  I want to execute a GraphQL query to fetch user data
  So that I can verify the API functionality

  Scenario: Fetch User Data
    Given I perform a GraphQL POST request to "/graphql" with query
      """
      {
        user(id: 6940083) {
          id
          name
          email
          gender
          status
        }
      }
      """
    Then the response status code should be 200
   # Then the response body should contain user details
