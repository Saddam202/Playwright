import {expect, Locator, test} from '@playwright/test';

const userName ='tomsmith';
const Password ='SuperSecretPassword!';
const url ='https://the-internet.herokuapp.com/';


test('Login -textBox',async({page})=>{

//locators 
const loginForm :Locator = page.getByRole('link',{name :'Form Authentication'});
const userNameInputField :Locator = page.locator('#username');
const passwordInputField : Locator = page.locator('//*[@type="password" and @name="password"]');
const loginBtn :Locator = page.locator('[class="fa fa-2x fa-sign-in"]');
const loginSuessfulMsg = page.locator('[id="flash"]');
const logoutBtn :Locator =page.locator('[class="icon-2x icon-signout"]');


//click on Form Authentication link
await page.goto(url);
await loginForm.click();
await expect(loginBtn).toBeVisible();
// fill in userName field
await userNameInputField.fill(userName);

//fill in password field
await passwordInputField.fill(Password);

//click on login btn 
await loginBtn.click();
await expect(loginSuessfulMsg).toContainText('You logged into a secure area!');
await expect(logoutBtn).toBeVisible();


})

test('invalid login',async({page})=>{

//locators 
const loginForm :Locator = page.getByRole('link',{name :'Form Authentication'});
const userNameInputField :Locator = page.locator('#username');
const passwordInputField : Locator = page.locator('//*[@type="password" and @name="password"]');
const loginBtn :Locator = page.locator('[class="fa fa-2x fa-sign-in"]');
const invalidLoginMsg :Locator = page.locator('//div[@class="flash error"]');



//click on Form Authentication link
await page.goto(url);
await loginForm.click();
await expect(loginBtn).toBeVisible();
// fill in userName field
await userNameInputField.fill(userName);

//fill in password field
await passwordInputField.fill("SuperSecretPasswor");

//click on login btn 
await loginBtn.click();
await expect(invalidLoginMsg).toBeVisible();


})

test('Checkbox2',async({page})=>{

//locators 
const checkBox1 :Locator = page.locator('//*[@id="checkboxes"]//input[1]');
const checkBox2 :Locator = page.locator('//*[@id="checkboxes"]//input[2]');



await page.goto(url);
//click on checkBoxs link
await page.getByRole('link',{name :/checkboxes/i}).click();




//check checkbox 1 & uncheck checkbox 2
await checkBox1.check();
await checkBox2.uncheck();
//validation 
await expect(checkBox1).toBeChecked();
await expect(checkBox2).not.toBeChecked();
})

test('Drag and drop2',async({page})=>{

//locators 
const boxA :Locator = page.locator('[id="column-a"]');
const boxB : Locator = page.locator('[id="column-b"]');



await page.goto(url);
//click on checkBoxs link
await page.getByRole('link',{name :/drag and drop/i}).click();

//drag boxA to boxB first way
await boxA.hover();
await page.mouse.down();
await boxB.hover();
await page.mouse.up();

//drag boxA to boxB second way

await boxB.dragTo(boxA);

await page.waitForTimeout(2000)
})

test('drop down2',async({page})=>{

//locators 
const singleSelector :Locator = page.locator('Option 1');



await page.goto(url);
//click on dropDown link
await page.getByRole('link',{name :'dropDown'}).click();

//select option 2 by value

await page.selectOption('[id="dropdown"]',
    {
        value : '2'
    }
)

// select option 1 by lable
await page.selectOption('[id="dropdown"]',
    {
        label : 'Option 1'
    }
)

await page.selectOption('[id="dropdown"]',
    {
        index : 2
    }
)

await page.waitForTimeout(2000)
})


test('Alerts2',async({page})=>{

//locators 
const jsAlert :Locator = page.locator('[onclick="jsAlert()"]');
const jsalertMsg :Locator = page.locator('//*[@id="result" or @style="color:green"]');
const jsConfirmAlert :Locator = page.locator('[onclick="jsConfirm()"]');
const jsConfirmAlerSucessMsg = page.getByText('You clicked: Ok');
const jsConfirmAlerCancelMsg = page.getByText('You clicked: Cancel');
const jsPromptBtn: Locator = page.locator('[onclick="jsPrompt()"]');
const jsPromptMsg :Locator=page.locator('[id="result"]');




await page.goto(url);
//click on alerts link
await page.getByRole('link',{name :/javaScript alerts/i}).click();

// simple jsalert
// page.on('dialog',async(alert)=>
// {
//     const alertMsg =alert.message();
//     console.log(alertMsg);
//     await expect(alertMsg).toBe('I am a JS Alert');
//     await alert.accept();



// }
// )
// await jsAlert.click();
// await expect(jsalertMsg).toBeVisible();

// js confirm alert -ok
// page.on('dialog',async(alert)=>
// { const alertConfirmMsg = alert.message();
//     console.log(alertConfirmMsg);
//     await expect(alertConfirmMsg).toBe('I am a JS Confirm');
//     await alert.accept();



// })
// await jsConfirmAlert.click();
// await expect(jsConfirmAlerSucessMsg).toHaveText('You clicked: Ok');

// js confirm alert -Cancel
// page.on('dialog',async(alert)=>
// { const alertConfirmMsg = alert.message();
//     console.log(alertConfirmMsg);
//     await expect(alertConfirmMsg).toBe('I am a JS Confirm');
//     await alert.dismiss();



// })
// await jsConfirmAlert.click();
// await expect(jsConfirmAlerCancelMsg).toHaveText('You clicked: Cancel');

// js prompt 
page.on('dialog',async(alert)=>
{ const promptMsg = alert.message();
    console.log(promptMsg);
    await expect(promptMsg).toBe('I am a JS prompt');
    await alert.accept('Automation tester : Saddam Abdallah');



})
await jsPromptBtn.click();
await expect(jsPromptMsg).toHaveText('You entered: Automation tester : Saddam Abdallah');




await page.waitForTimeout(2000)
}
)