import { expect } from 'chai' ;
import exp from '../expected/main-page'
import sel from './../selectors/main-page'

before( function () {
    browser.url('./.');
    browser.maximizeWindow();
});

describe('should check if it is a correct page with logo', function () { //define suite title by passing a string

    it('should get title', function () { //define test title by passing a string
        browser.url('/'); //open baseUrl + string passed in .url() function
        let title = browser.getTitle(); //get page title and assign it to the "title" variable
        browser.pause(2000); //just pause to visually see that something is happening on the page
        expect(title).to.eql(exp.mainPageTitle); //compare {title} (actual) and "Bug Tracker" (expected)
    });

    it('should open the main page with correct h1', () => {
        const actualH1 = $(sel.h1).getText();
        expect(actualH1).to.eq(exp.h1Text);
    });

    it('should have logo in header', function () {
        const actualLogo = $(sel.logoHeader).isDisplayed();
        expect(actualLogo).to.be.true;
    });

});

describe('should check Main menu bar', function() {

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

    it('should redirect to `Platform` page', function () {
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.platformMenuElement).click();
        const handles = browser.getWindowHandles();
        //console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !==  currentWindow)[0];
        if (newWindow) {
              browser.switchToWindow(newWindow);
              let actualTitle = browser.getTitle();
              //let actualH1 = $(sel.h1).getText();
              expect(actualTitle).to.be.equal(exp.platformPageTitle)
              //expect(actualH1).to.be.equal(exp.h1PlatformText);
              browser.closeWindow();
              browser.switchToWindow(currentWindow);
        }
    });

    it('should redirect to `Document Workflow` page', function () {
        $(sel.platformMenuElement).moveTo();
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.documentWorkflow).click();
        const handles = browser.getWindowHandles();
        console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !== currentWindow)[0];
        if(newWindow){
            browser.switchToWindow(newWindow);
            let actualTitle = browser.getTitle();
            expect(actualTitle).to.be.equal(exp.documentWorkflowPageTitle)
            browser.closeWindow();
            browser.switchToWindow(currentWindow);
        }
    });

    it('should redirect to `Care Coordination` page', function () {
        $(sel.platformMenuElement).moveTo();
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.careCoordination).click();
        const handles = browser.getWindowHandles();
        console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !== currentWindow)[0];
        if(newWindow){
            browser.switchToWindow(newWindow);
            let actualTitle = browser.getTitle();
            expect(actualTitle).to.be.equal(exp.careCoordinationPageTitle)
            browser.closeWindow();
            browser.switchToWindow(currentWindow);
        }
    });

    it('should have `For your role` element in Main Menu', function () {
        const actualForYourRoleElement = $(sel.forYourRoleMenuElement).waitForDisplayed();
        expect(actualForYourRoleElement).to.be.true;
    });

    it('should have Executive in `For Your Role` drop down menu', function () {
        $(sel.forYourRoleMenuElement).moveTo();
        const executiveIsDisplayed = $(sel.executive).waitForDisplayed();
        expect(executiveIsDisplayed).to.be.true;
    });

    it('should have Technical in `For Your Role` drop down menu', function () {
        $(sel.forYourRoleMenuElement).moveTo();
        const technicalIsDisplayed = $(sel.technical).waitForDisplayed();
        expect(technicalIsDisplayed).to.be.true;
    });

    it('should have Administrator in `For Your Role` drop down menu', function () {
        $(sel.forYourRoleMenuElement).moveTo();
        const administratorIsDisplayed = $(sel.administrator).waitForDisplayed();
        expect(administratorIsDisplayed).to.be.true;
    });

    it('should not redirect anywhere from `For Your Role', function () {
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.forYourRoleMenuElement).click();
        const handles = browser.getWindowHandles();
        console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !== currentWindow)[0];
        if(newWindow){
            browser.switchToWindow(newWindow);
            let actualTitle = browser.getTitle();
            //let actualH1 = $(sel.h1).getText();
            expect(actualTitle).to.be.equal(exp.mainPageTitle)
            //expect(actualH1).to.be.equal(exp.h1);
            browser.closeWindow();
            browser.switchToWindow(currentWindow);
        }
    });

    it('should redirect to `Executive` page', function () {
        $(sel.forYourRoleMenuElement).moveTo();
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.executive).click();
        const handles = browser.getWindowHandles();
        console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !== currentWindow)[0];
        if(newWindow){
            browser.switchToWindow(newWindow);
            let actualTitle = browser.getTitle();
            expect(actualTitle).to.be.equal(exp.executivePageTitle)
            browser.closeWindow();
            browser.switchToWindow(currentWindow);
        }
    });

    it('should redirect to `Technical` page', function () {
        $(sel.forYourRoleMenuElement).moveTo();
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.technical).click();
        const handles = browser.getWindowHandles();
        console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !== currentWindow)[0];
        if(newWindow){
            browser.switchToWindow(newWindow);
            let actualTitle = browser.getTitle();
            expect(actualTitle).to.be.equal(exp.technicalPageTitle)
            browser.closeWindow();
            browser.switchToWindow(currentWindow);
        }
    });

    it('should redirect to `Administrator` page', function () {
        $(sel.forYourRoleMenuElement).moveTo();
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.administrator).click();
        const handles = browser.getWindowHandles();
        console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !== currentWindow)[0];
        if(newWindow){
            browser.switchToWindow(newWindow);
            let actualTitle = browser.getTitle();
            expect(actualTitle).to.be.equal(exp.administratorPageTitle)
            browser.closeWindow();
            browser.switchToWindow(currentWindow);
        }
    });



    it('should have `Blog` element in Main Menu', function () {
        const actualBlogElement = $(sel.blogElement).waitForDisplayed();
        expect(actualBlogElement).to.be.true;
    });

    it('should redirect to `Blog` page', function () {
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.blogElement).click();
        const handles = browser.getWindowHandles();
        console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !== currentWindow)[0];
        if(newWindow){
            browser.switchToWindow(newWindow);
            let actualTitle = browser.getTitle();
            //let actualH1 = $(sel.h1).getText();
            expect(actualTitle).to.be.equal(exp.blogPageTitle)
            //expect(actualH1).to.be.equal(exp.h1BlogText);
            browser.closeWindow();
            browser.switchToWindow(currentWindow);
        }
    });

    it('should have `Resources` element in Main Menu', function () {
        const actualResourcesElement = $(sel.resourcesElement).waitForDisplayed();
        expect(actualResourcesElement).to.be.true;
    });

    it('should redirect to `Resources` page', function () {
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.resourcesElement).click();
        const handles = browser.getWindowHandles();
        console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !== currentWindow)[0];
        if(newWindow){
            browser.switchToWindow(newWindow);
            let actualTitle = browser.getTitle();
            expect(actualTitle).to.be.equal(exp.resourcesPageTitle);
            browser.closeWindow();
            browser.switchToWindow(currentWindow);
        }
    });

    it('should have `Company` element in Main Menu', function () {
        const actualBlogElement = $(sel.companyElement).waitForDisplayed();
        expect(actualBlogElement).to.be.true;
    });

    it('should have About Us in `Company` drop down menu', function () {
        $(sel.companyElement).moveTo();
        const companyElementIsDisplayed = $(sel.aboutUs).waitForDisplayed();
        expect(companyElementIsDisplayed).to.be.true;
    });

    it('should have Customers in `Company` drop down menu', function () {
        $(sel.companyElement).moveTo();
        const customersIsDisplayed = $(sel.customers).waitForDisplayed();
        expect(customersIsDisplayed).to.be.true;
    });

    it('should have Partners in `Company` drop down menu', function () {
        $(sel.companyElement).moveTo();
        const partnersIsDisplayed = $(sel.partners).waitForDisplayed();
        expect(partnersIsDisplayed).to.be.true;
    });

    it('should have Newsroom in `Company` drop down menu', function () {
        $(sel.companyElement).moveTo();
        const newsroomIsDisplayed = $(sel.newsroom).waitForDisplayed();
        expect(newsroomIsDisplayed).to.be.true;
    });

    it('should have Careers in `Company` drop down menu', function () {
        $(sel.companyElement).moveTo();
        const careersIsDisplayed = $(sel.careers).waitForDisplayed();
        expect(careersIsDisplayed).to.be.true;
    });

    it('should have Innovate Jax in `Company` drop down menu', function () {
        $(sel.companyElement).moveTo();
        const innovateJaxIsDisplayed = $(sel.innovateJax).waitForDisplayed();
        expect(innovateJaxIsDisplayed).to.be.true;
    });

    it('should not redirect anywhere from `Company', function () {
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.companyElement).click();
        const handles = browser.getWindowHandles();
        console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !== currentWindow)[0];
        if(newWindow){
            browser.switchToWindow(newWindow);
            let actualTitle = browser.getTitle();
            //let actualH1 = $(sel.h1).getText();
            expect(actualTitle).to.be.equal(exp.mainPageTitle);
            //expect(actualH1).to.be.equal(exp.h1);
            browser.closeWindow();
            browser.switchToWindow(currentWindow);
        }
    });

    it('should redirect to `About Us` page', function () {
        $(sel.companyElement).moveTo();
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.aboutUs).click();
        const handles = browser.getWindowHandles();
        console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !== currentWindow)[0];
        if(newWindow){
            browser.switchToWindow(newWindow);
            let actualTitle = browser.getTitle();
            expect(actualTitle).to.be.equal(exp.aboutUsPageTitle);
            browser.closeWindow();
            browser.switchToWindow(currentWindow);
        }
    });

    it('should redirect to `Customers` page', function () {
        $(sel.companyElement).moveTo();
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.customers).click();
        const handles = browser.getWindowHandles();
        console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !== currentWindow)[0];
        if(newWindow){
            browser.switchToWindow(newWindow);
            let actualTitle = browser.getTitle();
            expect(actualTitle).to.be.equal(exp.customersPageTitle);
            browser.closeWindow();
            browser.switchToWindow(currentWindow);
        }
    });

    it('should redirect to `Partners` page', function () {
        $(sel.companyElement).moveTo();
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.partners).click();
        const handles = browser.getWindowHandles();
        console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !== currentWindow)[0];
        if(newWindow){
            browser.switchToWindow(newWindow);
            let actualTitle = browser.getTitle();
            expect(actualTitle).to.be.equal(exp.partnersPageTitle);
            browser.closeWindow();
            browser.switchToWindow(currentWindow);
        }
    });

    it('should redirect to `Newsroom` page', function () {
        $(sel.companyElement).moveTo();
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.newsroom).click();
        const handles = browser.getWindowHandles();
        console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !== currentWindow)[0];
        if(newWindow){
            browser.switchToWindow(newWindow);
            let actualTitle = browser.getTitle();
            expect(actualTitle).to.be.equal(exp.newsroomPageTitle);
            browser.closeWindow();
            browser.switchToWindow(currentWindow);
        }
    });

    it('should redirect to `Careers` page', function () {
        $(sel.companyElement).moveTo();
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.careers).click();
        const handles = browser.getWindowHandles();
        console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !== currentWindow)[0];
        if(newWindow){
            browser.switchToWindow(newWindow);
            let actualTitle = browser.getTitle();
            expect(actualTitle).to.be.equal(exp.careersPageTitle);
            browser.closeWindow();
            browser.switchToWindow(currentWindow);
        }
    });

    it('should redirect to `Innovate Jax` page', function () {
        $(sel.companyElement).moveTo();
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.innovateJax).click();
        const handles = browser.getWindowHandles();
        console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !== currentWindow)[0];
        if(newWindow){
            browser.switchToWindow(newWindow);
            let actualTitle = browser.getTitle();
            expect(actualTitle).to.be.equal(exp.innovateJaxPageTitle);
            browser.closeWindow();
            browser.switchToWindow(currentWindow);
        }
    });

    it('should have `Login` element in Main Menu', function () {
        const actualLoginElement = $(sel.loginElement).waitForDisplayed();
        expect(actualLoginElement).to.be.true;
    });

    it('should redirect to `Login` page', function () {
        const currentWindow = browser.getWindowHandles()[0];
        $(sel.loginElement).click();
        const handles = browser.getWindowHandles();
        console.log('HANDLES', handles);
        const newWindow = handles.filter(el => el !== currentWindow)[0];
        if(newWindow){
            browser.switchToWindow(newWindow);
            let actualTitle = browser.getTitle();
            expect(actualTitle).to.be.equal(exp.loginPageTitle);
            browser.closeWindow();
            browser.switchToWindow(currentWindow);
        }
    });

});

