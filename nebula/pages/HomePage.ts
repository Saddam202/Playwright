import { expect, Locator, Page } from "@playwright/test";
import Assertations from "../../utilities/Assertations";
import Actions from "../../utilities/Actions";
import BasePage from "./BasePage";

export default class HomePage extends BasePage {

  //Locators

  private readonly userNameInputField: Locator = this.page.locator('//input[@id="username-input"]');
  private readonly passwordInputField: Locator = this.page.locator('(//label[@class="flex flex-col gap-1"]//input)[2]');
  private readonly loginBtn: Locator = this.page.getByRole('button', { name: "Login" });
  //chcekBoxes
  private readonly javaCheckBox: Locator = this.page.locator('//*[@id="chk-java" and @type="checkbox"]').describe('java checkBox');
  private readonly seleniumCheckBox: Locator = this.page.locator('[id="chk-selenium"]');
  private readonly apiCheckBox: Locator = this.page.locator('#chk-api');
  //Radio button
  private readonly seniorRadioBtn: Locator = this.page.locator('//input[@id="rdo-senior" and@type="radio" and @name="level" and @value="senior"]');
  private readonly checkboxesBtn: Locator = this.page.getByRole('link', { name: /03 checkboxes/i });
  private readonly itemA: Locator = this.page.locator('[id="draggable-Item-A"]');
  private readonly itemAdraggable: Locator = this.page.locator('//li[@class="rounded-xl border p-2"]');
  private readonly itemB: Locator = this.page.locator('[id="draggable-Item-B"]');
  private readonly rightBox: Locator = this.page.locator('[id="drop-right"]');
  private readonly dragAndDropSectionBtn = this.page.getByRole('link', { name: /05 Drag/i });
  private readonly singleSelectDropDown: Locator = this.page.locator('[id="single-select"]');
  private readonly dropDownSectionBtn: Locator = this.page.getByRole('link', { name: /09 drop/i });
  // Actions 

  async clickOndropDownSectionBtn() {
    await this.actions.clickOnElement(this.dragAndDropSectionBtn);
  }
  async clickOnDragAndDropSectionBtn() {
    this.actions.clickOnElement(this.dragAndDropSectionBtn)
  }
  async clickCheckboxesBtn() {
    this.actions.clickOnElement(this.checkboxesBtn)
  }

  // check on java and selenium checkbox
  async checkJavaCheckBox() {

    await this.actions.checkElement(this.javaCheckBox);
  }
  async unchcekJavaCheckBox() {
    await this.actions.uncheckElement(this.javaCheckBox, 'java checkBox');


  }
  async checkSeleniumCheckBox() {
    await this.actions.checkElement(this.seleniumCheckBox, 'selenium checkBox');

  }
  async checkApiCheckBox() {
    await this.actions.checkElement(this.apiCheckBox, 'API checkBox');

  }

  async checkSeniorCheckBox() {
    await this.actions.checkElement(this.seniorRadioBtn)

  }

  async dragitemAToitemB() {

    await this.itemB.dragTo(this.rightBox);
    await expect(this.rightBox.filter({ has: this.itemAdraggable })).toBeVisible();



  }
  
  async selectChromeFromdropDoen (){

    await this.actions.selectOptionFromDropDown(this.page,'chrome')
  }


}