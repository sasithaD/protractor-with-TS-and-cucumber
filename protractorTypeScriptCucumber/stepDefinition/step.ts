import { Given,When,Then } from "cucumber";
import { async } from "q";
import { browser } from "protractor";
import { Calculator } from "../pageObjects/calculator";
import { angularjsPage } from "../pageObjects/angularjs";

let calc=new Calculator();
let ang=new angularjsPage();

Given('navigate to the {string} site', async(string)=> {
    if(string=="calc"){
        await browser.get('http://juliemr.github.io/protractor-demo/');
    }else if(string=="ang"){
        await browser.get("https://angularjs.org/");
    }
});

When('entering the input fields {string} and {string}', async(string, string2)=> {
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
    await calc.go.click();
});

Then('output will be {string}', async(string)=> {
    await calc.getResult.getText().then(
        function(string) {
            console.log(string);
        })
});


When('you click on the header link', async()=> {
    await ang.link.click();
});

  
Then('enter {string} in the search box',async(string)=> {
    await browser.sleep(3000);
	await ang.searchBox.sendKeys(string);
});