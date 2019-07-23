"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = require("cucumber-html-reporter");
// An example configuration file
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        // require step definitions
        //tags:"@calculatorTesting",
        format: "json:./cucumberReport.json",
        onComplete: () => {
            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumberReport.json',
                output: './cucumber_report.html',
                reportSuiteAsScenarios: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome  54.0.2840.98",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };
            reporter.generate(options);
        },
        require: [
            './stepDefinition/*.js' // accepts a glob
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1EQUFtRDtBQUVuRCxnQ0FBZ0M7QUFDckIsUUFBQSxNQUFNLEdBQVU7SUFDdkIsNENBQTRDO0lBQzVDLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUMsSUFBSTtJQUNsQixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUUvRCx1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFRCx1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyxLQUFLLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztJQUVuQyxZQUFZLEVBQUU7UUFDViwyQkFBMkI7UUFFM0IsNEJBQTRCO1FBQzVCLE1BQU0sRUFBQyw0QkFBNEI7UUFHbkMsVUFBVSxFQUFFLEdBQUUsRUFBRTtZQUNkLElBQUksT0FBTyxHQUFHO2dCQUNaLEtBQUssRUFBRSxXQUFXO2dCQUNsQixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxNQUFNLEVBQUUsd0JBQXdCO2dCQUNoQyxzQkFBc0IsRUFBRSxJQUFJO2dCQUM1QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsUUFBUSxFQUFFO29CQUNOLGFBQWEsRUFBQyxPQUFPO29CQUNyQixrQkFBa0IsRUFBRSxTQUFTO29CQUM3QixTQUFTLEVBQUUsc0JBQXNCO29CQUNqQyxVQUFVLEVBQUUsWUFBWTtvQkFDeEIsVUFBVSxFQUFFLFdBQVc7b0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2lCQUN2QjthQUNKLENBQUM7WUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFHRCxPQUFPLEVBQUU7WUFDUCx1QkFBdUIsQ0FBQyxpQkFBaUI7U0FDMUM7S0FDRjtDQUdKLENBQUMifQ==