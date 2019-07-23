import { ElementFinder, element, by } from "protractor";

export class angularjsPage{

    link:ElementFinder;
    searchBox:ElementFinder;

    constructor(){
        this.link=element(by.linkText("angular.io"));
        this.searchBox=element(by.css("input[type='search']"));
    }
}