import { Page } from "@playwright/test";

export default class Waits {

private readonly page:Page;

constructor(page:Page){

    this.page =page;
}

async waitForTimeOutInSec (seconds:number){

    await this.page.waitForTimeout(seconds *2000);

}
async waitForPageToFullyLoad(){
 await this.page.waitForLoadState('networkidle');
 await this.page.waitForLoadState('domcontentloaded');

}

}