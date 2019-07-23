import { Before, After, Status } from "cucumber";
import { browser } from "protractor";
import { async } from "q";

Before({tags: "@calculatorTesting"}, function () {
    browser.manage().window().maximize();
  });
  
After({tags: "@calculatorTesting"}, function () {
    console.log("Test is completed");
});

After(async(scene)=> {
    if(scene.result.status==Status.FAILED){
      const sc=await browser.takeScreenshot();

      this.attach(sc,"image/png");
    }
});