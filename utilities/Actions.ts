import { Locator, Page } from "@playwright/test";
import Assertations from "./Assertations";

export default class Actions {
    private readonly asserations = new Assertations();

    async enterTextToElement(element: Locator, text: string) {
        await element.clear();
        await element.fill(text);
        console.log(`entering ${text} in element`);
    }


    async clickOnElement(element: Locator) {
        await element.click();
        console.log(`clicking on element`);
    }


    async goToURL(page: Page, url: string) {
        await page.goto(url);
        console.log(`navigating to  url ${url}`)
    }

    async checkElement(elementLocator: Locator, elementName?: string | null | undefined) {
        if (elementName) {
            console.log(`Checking an elemnet `);
        }
        else
            console.log(`Checking element : .....`)

        await this.asserations.assertElementisNotChecked(elementLocator);
        await elementLocator.check();
        await this.asserations.assertElementisChecked(elementLocator);



    }

    async uncheckElement(elementLocator: Locator, elementName?: string | null | undefined) {
        if (elementName) {
            console.log(`unChecking an elemnet ${elementName}`);
        }
        else
            console.log(`unChecking element : .....`)
        await this.asserations.assertElementisChecked(elementLocator);

        await elementLocator.uncheck();
        await this.asserations.assertElementisNotChecked(elementLocator);
        console.log(`UnChecking an elemnet ${elementName}`)


    }


    async selectOptionFromDropDown(page: Page, value: string) {
        await page.selectOption('[id="single-select"]', {
            value : value
        });
    }

}

