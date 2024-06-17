const report = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile : 'cucumber-report/cucumber_report.json',
    output : 'cucumber-report//cucumber-html-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version":"1.0.0",
        "Test Environment": "STAGING",
        "Browser": "Chrome  99.0.9999.9999",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
};

report.generate(options);