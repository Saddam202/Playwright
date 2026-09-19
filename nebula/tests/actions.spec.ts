import {expect, Locator} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import { Credentials } from '../Test data/enums';
import {test} from '../fixtures/fixtures.ts'
//pom : page object model

//3 Main components of any TAF => test Automation framework
// business logic layer => page object model : page classes
// test layer => test cases : test classes
// core libraries => utilities : helper classes
// got to nebula website
//fill  the username
//fill  the password
//click on the login button

 const url = "https://nebula-test-lab-lv1.vercel.app/";
 const password = Credentials.VALID_PASSWORD;
 let username =Credentials.VALID_USERNAME;


test("Login-textbox |click", async({page,loginPage,homePage})=>{




// got to nebula website
await loginPage.goToURL();
//fill  the username
await loginPage.enterUserName(username);
//fill  the password
await loginPage.enterPassword(password);
//click on the login button
await loginPage.clickLoginButton();


await page.waitForTimeout(3000);


})

test("Login-invalid-credentials", async({page,loginPage,homePage})=>{

// got to nebula website
await loginPage.goToURL();
//fill  the username
let username = Credentials.INVALID_USERNAME;
await loginPage.enterUserName(username);
//fill  the password
await loginPage.enterPassword(password);
//click on the login button
await loginPage.clickLoginButton();

await page.waitForTimeout(2000);




})

test("Radio button & Checkbox", async({page,loginPage,homePage})=>{
// got to nebula website
await loginPage.goToURL();
//fill  the username
await loginPage.enterUserName(username);
//fill  the password
await loginPage.enterPassword(password);
//click on the login button
await loginPage.clickLoginButton()

// click on checkbox and radio button url
await homePage.clickCheckboxesBtn();

await homePage.checkApiCheckBox();
await homePage.checkSeleniumCheckBox();
await homePage.checkSeniorCheckBox();
await homePage.checkJavaCheckBox();
await homePage.unchcekJavaCheckBox();




await page.waitForTimeout(2000);

})


test("Drag and drop", async({page,loginPage,homePage})=>{





// got to nebula website
await loginPage.goToURL();
//fill  the username
await loginPage.enterUserName(username);
//fill  the password
await loginPage.enterPassword(password);
await loginPage.clickLoginButton();


// click on drag and drop btn
await homePage.clickOnDragAndDropSectionBtn();
//drag item a to right box
// await itemA.hover();
// await page.mouse.down();
// await rightBox.hover();
// await page.mouse.up();

homePage.dragitemAToitemB();


await page.waitForTimeout(2000);

})

test("drop down", async({page,loginPage,homePage})=>{


// got to nebula website
await loginPage.goToURL();
//fill  the username
await loginPage.enterUserName(username);
//fill  the password
await loginPage.enterPassword(password);
await loginPage.clickLoginButton();

// click on drag and drop btn
await homePage.clickOnDragAndDropSectionBtn();

//select chrome from drop down => single select
await homePage.selectChromeFromdropDoen()

// await page.selectOption('[id="single-select"]',
//     {
//         label :"Edge"
//     }
// )
// await page.selectOption('[id="single-select"]',
//     {
//         index :0
//     }
// )
// select two options fron drop down

// await page.selectOption('[id="multi-select"]',
//     [
//         {
//             value :"db"
//         },
//         {
//             index :0
//         }
//     ]
// )

await page.waitForTimeout(2000);

})


test("Alerts", async({page})=>{

const userNameInputField : Locator = page.locator('//input[@id="username-input"]');
const passwordInputField : Locator = page.locator('(//label[@class="flex flex-col gap-1"]//input)[2]');
const loginBtn : Locator = page.getByRole('button',{name:"Login"});
//Alerts locators
const simpleAlert : Locator = page.locator('[id="btn-alert"]');
const confirmAlert : Locator = page.locator('[id="btn-confirm"]');
const promptAlert : Locator = page.locator('[id="btn-prompt"]');
const confirmAlertMsg :Locator = page.locator('[id="confirm-out"]');
const disMissAlertMsg : Locator = page.locator('[id="confirm-out"]');
const acceptPromptMsg : Locator = page.locator('[id="prompt-out"]');

// got to nebula website
await page.goto(url);
//fill  the username
await userNameInputField.fill(username);
//fill  the password
await passwordInputField.fill(password);
await loginBtn.click();
await expect(page.locator('[id="btn-logout"]')).not.toBeVisible();

// click on Alert btn
await page.getByRole('link', {name:/12 alerts/i}).click();
// click on simpleAlert btn
// page.on('dialog',async(alert)=>{
// const alertMsg =alert.message();
// console.log(alertMsg);
// await expect(alertMsg).toBe('Simple alert');
// await alert.accept();


// })
// await simpleAlert.click();

//click on confirm alert
// page.on('dialog',async(alert)=>
// {
//     const confirmAlertMsg = alert.message();
//     console.log(confirmAlertMsg);
//     await expect(confirmAlertMsg).toBe('Are you sure?');
//     await alert.accept();
// }
// )

// await confirmAlert.click();
// await expect(confirmAlertMsg).toHaveText('OK');

// click on Cancel alert 

// page.on('dialog',async(alert)=>
// {
//     const confirmAlertMsg = alert.message();
//     console.log(confirmAlertMsg);
//     await expect(confirmAlertMsg).toBe('Are you sure?');
//     await alert.dismiss();
// }
// )

// await confirmAlert.click();
// await expect(disMissAlertMsg).toHaveText('Cancel');

// click on propmt alert
// page.on('dialog',async(alert)=>{
 
//     const alertMsg = alert.message();
//     console.log(alertMsg);
//     await expect(alertMsg).toBe('Type anything:');
//     await alert.accept('Saddam Abdallah');

// })

// await promptAlert.click();
// await expect(acceptPromptMsg).toHaveText('Saddam Abdallah')

//cansel prompt alert
page.on('dialog',async(alert)=>{
const alertMsg = alert.message();
console.log(alertMsg);
await expect(alertMsg).toBe('Type anything:');
await alert.dismiss();


})
await promptAlert.click();


await page.waitForTimeout(3000);

})