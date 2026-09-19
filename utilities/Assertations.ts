import { expect, Locator } from "@playwright/test";

export default class Assertations {


    async assertElementVisible(elementLocator: Locator) {
        await expect(elementLocator).toBeVisible();

}


async assertElementisChecked(elementLocator :Locator){
  await expect(elementLocator).toBeChecked();


}
async assertElementisNotChecked(elementLocator :Locator){
  await expect(elementLocator).not.toBeChecked();


}
}