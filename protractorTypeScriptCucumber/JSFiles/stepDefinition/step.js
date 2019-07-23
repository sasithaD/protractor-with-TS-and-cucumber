"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const calculator_1 = require("../pageObjects/calculator");
const angularjs_1 = require("../pageObjects/angularjs");
let calc = new calculator_1.Calculator();
let ang = new angularjs_1.angularjsPage();
cucumber_1.Given('navigate to the {string} site', (string) => __awaiter(this, void 0, void 0, function* () {
    if (string == "calc") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "ang") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When('entering the input fields {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
    yield calc.go.click();
}));
cucumber_1.Then('output will be {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield calc.getResult.getText().then(function (string) {
        console.log(string);
    });
}));
cucumber_1.When('you click on the header link', () => __awaiter(this, void 0, void 0, function* () {
    yield ang.link.click();
}));
cucumber_1.Then('enter {string} in the search box', (string) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield ang.searchBox.sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9uL3N0ZXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUEyQztBQUUzQywyQ0FBcUM7QUFDckMsMERBQXVEO0FBQ3ZELHdEQUF5RDtBQUV6RCxJQUFJLElBQUksR0FBQyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUMxQixJQUFJLEdBQUcsR0FBQyxJQUFJLHlCQUFhLEVBQUUsQ0FBQztBQUU1QixnQkFBSyxDQUFDLCtCQUErQixFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDbEQsSUFBRyxNQUFNLElBQUUsTUFBTSxFQUFDO1FBQ2QsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0tBQ2xFO1NBQUssSUFBRyxNQUFNLElBQUUsS0FBSyxFQUFDO1FBQ25CLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUMvQztBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsaURBQWlELEVBQUUsQ0FBTSxNQUFNLEVBQUUsT0FBTyxFQUFDLEVBQUU7SUFDNUUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDM0MsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDL0IsVUFBUyxNQUFNO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQTtBQUNWLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsOEJBQThCLEVBQUUsR0FBTyxFQUFFO0lBQzFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMzQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLGtDQUFrQyxFQUFDLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDbkQsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixNQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==