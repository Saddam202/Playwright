import {expect, Locator, test} from '@playwright/test';

// got to nebula website
//fill  the username
//fill  the password
//click on the login button

 const url = "https://nebula-test-lab-lv1.vercel.app/";
 const password = "selenium123";
 const username ="trainer";


test("Login-textbox |click", async({page})=>{

const userNameInputField = page.locator('//input[@id="username-input"]');
const passwordInputField = page.locator('(//label[@class="flex flex-col gap-1"]//input)[2]');
const loginBtn = page.getByRole('button',{name:"Login"});

// got to nebula website
await page.goto(url);
//fill  the username
await userNameInputField.fill(username);
//fill  the password
await passwordInputField.fill(password);
await loginBtn.click();
await expect(page.locator('[id="btn-logout"]')).toBeVisible();

await page.waitForTimeout(2000);


})

test("Login-invalid-credentials", async({page})=>{

// got to nebula website
await page.goto(url);
//fill  the username
await page.locator('//input[@id="username-input"]').fill('trainee');
//fill  the password
await page.locator('(//label[@class="flex flex-col gap-1"]//input)[2]').fill('selenium123');
await page.getByRole('button', {name: 'Login'}).click();
await expect(page.locator('[id="btn-logout"]')).not.toBeVisible();

await page.waitForTimeout(2000);




})

test("Radio button & Checkbox", async({page})=>{

const userNameInputField : Locator = page.locator('//input[@id="username-input"]');
const passwordInputField : Locator = page.locator('(//label[@class="flex flex-col gap-1"]//input)[2]');
const loginBtn : Locator = page.getByRole('button',{name:"Login"});
//chcekBoxes
const javaCheckBox : Locator = page.locator('//*[@id="chk-java" and @type="checkbox"]');
const seleniumCheckBox : Locator = page.locator('[id="chk-selenium"]');
const apiCheckBox : Locator = page.locator('#chk-api');
//Radio button
const seniorRadioBtn : Locator = page.locator('//input[@id="rdo-senior" and@type="radio" and @name="level" and @value="senior"]');

// got to nebula website
await page.goto(url);
//fill  the username
await userNameInputField.fill(username);
//fill  the password
await passwordInputField.fill(password);
await loginBtn.click();
await expect(page.locator('[id="btn-logout"]')).not.toBeVisible();

// click on checkbox and radio button url
await page.getByRole('link', {name: /03 checkboxes/i}).click();


// check on java and selenium checkbox
await javaCheckBox.check();
await seleniumCheckBox.check();
await apiCheckBox.check();
await apiCheckBox.uncheck();

//validate the checkbox is checked 

await expect(javaCheckBox).toBeChecked();
await expect(seleniumCheckBox).toBeChecked();
await expect(apiCheckBox).not.toBeChecked();


// select senior radio button
await seniorRadioBtn.check();
await expect(seniorRadioBtn).toBeChecked();


await page.waitForTimeout(2000);

})


test("Drag and drop", async({page})=>{

const userNameInputField : Locator = page.locator('//input[@id="username-input"]');
const passwordInputField : Locator = page.locator('(//label[@class="flex flex-col gap-1"]//input)[2]');
const loginBtn : Locator = page.getByRole('button',{name:"Login"});
//drag and drop
const itemA : Locator = page.locator('[id="draggable-Item-A"]');
const itemAdraggable : Locator = page.locator('//li[@class="rounded-xl border p-2"]');
const itemB : Locator = page.locator('[id="draggable-Item-B"]');
const rightBox : Locator = page.locator('[id="drop-right"]');


// got to nebula website
await page.goto(url);
//fill  the username
await userNameInputField.fill(username);
//fill  the password
await passwordInputField.fill(password);
await loginBtn.click();
await expect(page.locator('[id="btn-logout"]')).not.toBeVisible();

// click on drag and drop btn
await page.getByRole('link', {name:/05 Drag/i}).click();

//drag item a to right box
await itemA.hover();
await page.mouse.down();
await rightBox.hover();
await page.mouse.up();

await itemB.dragTo(rightBox);
await expect(rightBox.filter({has:itemAdraggable})).toBeVisible();






await page.waitForTimeout(2000);

})

test("drop down", async({page})=>{

const userNameInputField : Locator = page.locator('//input[@id="username-input"]');
const passwordInputField : Locator = page.locator('(//label[@class="flex flex-col gap-1"]//input)[2]');
const loginBtn : Locator = page.getByRole('button',{name:"Login"});
//drop down loactors 
const singleSelectDropDown :Locator = page.locator('[id="single-select"]');

// got to nebula website
await page.goto(url);
//fill  the username
await userNameInputField.fill(username);
//fill  the password
await passwordInputField.fill(password);
await loginBtn.click();
await expect(page.locator('[id="btn-logout"]')).not.toBeVisible();

// click on drag and drop btn
await page.getByRole('link', {name:/09 drop/i}).click();

//select chrome from drop down => single select
await page.selectOption('[id="single-select"]',
    {
        value :'firefox'
    }

);

await page.selectOption('[id="single-select"]',
    {
        label :"Edge"
    }
)
await page.selectOption('[id="single-select"]',
    {
        index :0
    }
)
// select two options fron drop down

await page.selectOption('[id="multi-select"]',
    [
        {
            value :"db"
        },
        {
            index :0
        }
    ]
)

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