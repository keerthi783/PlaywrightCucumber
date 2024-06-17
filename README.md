## Playwright Cucumber Framework

The tech stack used in this project are:
1. **JavaScript** as the programming language for writing test code
2. **Cucumber** as the framework
3. **NPM** as the build tool
4. **VSCode** as the preferred IDE for writing typescript code.

#### Getting Started
Setup your machine.
1. Node 18
2. Install VSCode & open the repo
3. On Terminal, navigate to repo and run ```npm install```

#### Running tests
* Run tests in Sequence: ```browser=chrome npm run cucumber -- --tags="@test"```
* Run tests in Parallel: ```browser=chrome npm run cucumber -- --tags="@test" --parallel=5```
* Run UI test: npm run test:ui
* Run API test: npm run test:api

#### Report
* Report will be found here: ```reports/index.html```
---

