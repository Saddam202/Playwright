import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

export default class LoginPage extends BasePage {

    
    // Locators
    private readonly userNameInputField: Locator = this.page.locator('//input[@id="username-input"]');
    private readonly passwordInputField: Locator = this.page.locator('(//label[@class="flex flex-col gap-1"]//input)[2]');
    private readonly loginBtn: Locator=this.page.getByRole('button', { name: "Login" });
    private readonly logoutBtn: Locator =this.page.locator('[id="btn-logout"]');
    private readonly loginPageUrl: string = "https://nebula-test-lab-lv1.vercel.app/";
    private readonly invalidCredentialsMsg =this.page.getByText('Invalid credentials');

    





    // Actions
    async enterUserName(username: string) {

        await this.actions.enterTextToElement(this.userNameInputField, username);

    }

    async enterPassword(password: string) {
        await this.actions.enterTextToElement(this.passwordInputField, password);

    }
    async clickLoginButton() {
        await this.loginBtn.click();
        if(await this.invalidCredentialsMsg.isVisible())
        {
            throw new Error('incorrect password')
        }
        else{
        await this.assertations.assertElementVisible(this.logoutBtn);
        }
    }
 
    async goToURL(){
        await this.actions.goToURL(this.page,this.loginPageUrl);
        await this.assertations.assertElementVisible(this.userNameInputField);
    }

}    

