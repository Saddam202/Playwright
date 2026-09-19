import { Page } from "@playwright/test";
import Actions from "../../utilities/Actions";
import Assertations from "../../utilities/Assertations";

export default class BasePage {
    protected readonly page: Page;
    protected readonly actions: Actions = new Actions();
    protected readonly assertations: Assertations = new Assertations();


    constructor(page: Page) {
        this.page = page;
    }

}
