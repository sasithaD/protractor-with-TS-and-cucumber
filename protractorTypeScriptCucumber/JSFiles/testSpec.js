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
const protractor_1 = require("protractor");
const calculator_1 = require("./pageObjects/calculator");
const angularjs_1 = require("./pageObjects/angularjs");
describe('protractor element demo', () => {
    it('Locators', () => __awaiter(this, void 0, void 0, function* () {
        let calc = new calculator_1.Calculator();
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        yield calc.firstEditBox.sendKeys("9");
        yield calc.secondEditBox.sendKeys("1");
        yield calc.go.click();
        calc.getResult.getText().then(function (text) {
            console.log(text);
        });
    }));
    it('angularjs site', () => __awaiter(this, void 0, void 0, function* () {
        let ang = new angularjs_1.angularjsPage();
        yield protractor_1.browser.get("https://angularjs.org/");
        yield ang.link.click();
        yield protractor_1.browser.sleep(3000);
        yield ang.searchBox.sendKeys("Hello");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0U3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQThDO0FBRTlDLHlEQUFzRDtBQUN0RCx1REFBd0Q7QUFFeEQsUUFBUSxDQUFDLHlCQUF5QixFQUFDLEdBQUUsRUFBRTtJQUN0QyxFQUFFLENBQUMsVUFBVSxFQUFDLEdBQU8sRUFBRTtRQUN0QixJQUFJLElBQUksR0FBQyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUMxQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDM0IsVUFBUyxJQUFJO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQTtJQUVMLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsZ0JBQWdCLEVBQUMsR0FBTyxFQUFFO1FBQzVCLElBQUksR0FBRyxHQUFDLElBQUkseUJBQWEsRUFBRSxDQUFDO1FBQzVCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM1QyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBR3ZDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFSCxDQUFDLENBQUMsQ0FBQSJ9