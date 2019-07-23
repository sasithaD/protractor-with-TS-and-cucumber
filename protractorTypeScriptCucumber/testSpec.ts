import {browser,element,by} from "protractor";
import { async } from "q";
import { Calculator } from "./pageObjects/calculator";
import { angularjsPage } from "./pageObjects/angularjs";

describe('protractor element demo',()=> {
	it('Locators',async()=> {
		let calc=new Calculator();
		await browser.get('http://juliemr.github.io/protractor-demo/');
		await calc.firstEditBox.sendKeys("9");
		await calc.secondEditBox.sendKeys("1");
		await calc.go.click();

		calc.getResult.getText().then(
				function(text) {
					console.log(text);
				})

	})

	it('angularjs site',async()=>{
		let ang=new angularjsPage();
		await browser.get("https://angularjs.org/");
		await ang.link.click();
		await browser.sleep(3000);
		await ang.searchBox.sendKeys("Hello");


	})

})