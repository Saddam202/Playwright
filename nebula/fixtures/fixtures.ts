import {test as baseTest} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

type pages = {

    loginPage :LoginPage,
    homePage: HomePage
}

const testpasges = baseTest.extend<pages>({

loginPage: async ({page},use) => {
    await use(new LoginPage (page))
},

homePage: async ({page},use) => {
    await use(new HomePage (page))
}

})

export const test = testpasges;

    