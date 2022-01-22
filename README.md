QA End To End Testing (QA-E2E)
==============================

## How to set up a project
 1. Clone the project from the https://github.com/rifflearning/QA-E2E
 2. Install the NPM modules, run  `npm install`
 3. Create .env file with variables CYPRESS_APIKEY and CYPRESS_NAMESPACE, each variable should match
    the API Key and Namespace respectively in the https://api.testmail.app
 4. Try to run Cypress debug tool, for that you can use `npx cypress open` or `npm run cypress`
 5. Once it's opened, try to run the spec files by clicking on them.
 6. Try to run all the cypress tests by running the command `npm run test`
 7. Verify the test result by the console output or the cypress runner results.
