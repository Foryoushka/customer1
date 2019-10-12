import { expect } from 'chai' ;
import exp from '../expected/main-page'
import sel from './../selectors/main-page'

describe('Main page', function () { //define suite title by passing a string

    before(() => {
        browser.maximizeWindow();
    });

   it('Get title', function () { //define test title by passing a string
        browser.url('/'); //open baseUrl + string passed in .url() function
        let title = browser.getTitle(); //get page title and assign it to the "title" variable
        browser.pause(2000); //just pause to visually see that something is happening on the page
        expect(title).to.eql(exp.mainPageTitle); //compare {title} (actual) and "Bug Tracker" (expected)
    });

    it('should open the main page with correct h1', () => {
        const actualTitle = $(sel.h1).getText();
        expect(actualTitle).to.eq(exp.h1Text);
    });

    it('should have logo in header', function () {
        const actualLogo = $(sel.logoHeader).isDisplayed();
        expect(actualLogo).to.be.true;
    });

    it('should have main menu bar', function () {
        const actualMainMenu = $(sel.mainMenuBar).isDisplayed();
        expect(actualMainMenu).to.be.true;
    });

    // it('should have 7 elements in main menu', function () {
    //     const actualMenuLength = $(sel.mainMenuBarArray).length;
    //     expect(actualMenuLength).to.be.equal(7);
    //
    // });

    it('should have `Platform` element in Main Menu', function () {
        const actualPlatformElement = $(sel.platformMenuElement).isDisplayed();
        expect(actualPlatformElement).to.be.true;
    });

    it('should have Document Workflow in `Platform` drop down menu', function () {
        $(sel.platformMenuElement).moveTo();
        const documentWorkflowIsDisplayed = $(sel.documentWorkflow).waitForDisplayed();
        expect(documentWorkflowIsDisplayed).to.be.true;
    });

    it('should have Care Coordination in `Platform` drop down menu', function () {
        $(sel.platformMenuElement).moveTo();
        const careCoordinationIsDisplayed = $(sel.careCoordination).waitForDisplayed();
        expect(careCoordinationIsDisplayed).to.be.true;
    });
});

