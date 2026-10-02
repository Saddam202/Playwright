import { Page } from "@playwright/test";
import Actions from "../../utilities/Actions";
import Assertations from "../../utilities/Assertations";
import Waits from "../../utilities/Waits";

export default class BasePage {
    protected readonly page: Page;
    protected readonly actions: Actions = new Actions();
    protected readonly assertations: Assertations = new Assertations();
    public readonly waits : Waits;


    constructor(page: Page) {
        this.page = page;
        this.waits = new Waits(this.page);
    }

}
