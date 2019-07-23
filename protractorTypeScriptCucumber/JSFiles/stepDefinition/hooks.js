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
cucumber_1.Before({ tags: "@calculatorTesting" }, function () {
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.After({ tags: "@calculatorTesting" }, function () {
    console.log("Test is completed");
});
cucumber_1.After((scene) => __awaiter(this, void 0, void 0, function* () {
    if (scene.result.status == cucumber_1.Status.FAILED) {
        const sc = yield protractor_1.browser.takeScreenshot();
        this.attach(sc, "image/png");
    }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbi9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQWlEO0FBQ2pELDJDQUFxQztBQUdyQyxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFDLEVBQUU7SUFDakMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQztBQUVMLGdCQUFLLENBQUMsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUMsRUFBRTtJQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUU7SUFDaEIsSUFBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBRSxpQkFBTSxDQUFDLE1BQU0sRUFBQztRQUNwQyxNQUFNLEVBQUUsR0FBQyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsV0FBVyxDQUFDLENBQUM7S0FDN0I7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=