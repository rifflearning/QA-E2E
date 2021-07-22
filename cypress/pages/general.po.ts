import {AbstractPage} from "./abstract.po";

export class GeneralPage extends AbstractPage {
    open(): void {
        cy.visit("/")
    }
}
