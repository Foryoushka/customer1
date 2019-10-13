import { expect } from 'chai' ;
import exp from '../expected/main-page'
import sel from '../selectors/main-page'
import data from './../data/main-page'

before ( function () {
    browser.url('./.');
    browser.maximizeWindow();
});

describe('should check if it is a correct page with logo', function () {

    it('should get title', function () {
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.eql(exp.mainPageTitle);
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

    it('should have `For your role` element in Main Menu', function () {
        browser.url('./.');
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
        $(sel.forYourRoleMenuElement).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.mainPageTitle);
    });

    it('should have `Blog` element in Main Menu', function () {
        browser.url('./.');
        const actualBlogElement = $(sel.blogElement).waitForDisplayed();
        expect(actualBlogElement).to.be.true;
    });

    it('should have `Resources` element in Main Menu', function () {
        browser.url('./.');
        const actualResourcesElement = $(sel.resourcesElement).waitForDisplayed();
        expect(actualResourcesElement).to.be.true;
    });

    it('should have `Company` element in Main Menu', function () {
         browser.url('./.');
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
        $(sel.companyElement).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.mainPageTitle);
    });

    it('should have `Login` element in Main Menu', function () {
        browser.url('./.');
        const actualLoginElement = $(sel.loginElement).waitForDisplayed();
        expect(actualLoginElement).to.be.true;
    });

    it('should have `Schedule demo` button in Main Menu', function () {
        browser.url('./.');
        const actualScheduleDemoButton = $(sel.scheduleDemoButton).waitForDisplayed();
        expect(actualScheduleDemoButton).to.be.true;
    });

    beforeEach( function () {
       browser.url('./.');
    })

    it('should redirect to `Platform` page', function () {
        $(sel.platformMenuElement).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.platformPageTitle);
    });

    it('should redirect to `Document Workflow` page', function () {
        $(sel.platformMenuElement).moveTo();
        $(sel.documentWorkflow).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.documentWorkflowPageTitle);
    });

    it('should redirect to `Care Coordination` page', function () {
        $(sel.platformMenuElement).moveTo();
        $(sel.careCoordination).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.careCoordinationPageTitle);
    });

    it('should redirect to `Executive` page', function () {
        $(sel.forYourRoleMenuElement).moveTo();
        $(sel.executive).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.executivePageTitle);
    });

    it('should redirect to `Technical` page', function () {
        $(sel.forYourRoleMenuElement).moveTo();
        $(sel.technical).click();
        let actualTitle = browser.getTitle();
    });

    it('should redirect to `Administrator` page', function () {
        $(sel.forYourRoleMenuElement).moveTo();
        $(sel.administrator).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.administratorPageTitle)
    });

    it('should redirect to `Blog` page', function () {
        $(sel.blogElement).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.blogPageTitle)
    });

    it('should redirect to `Resources` page', function () {
        $(sel.resourcesElement).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.resourcesPageTitle);
    });

    it('should redirect to `About Us` page', function () {
        $(sel.companyElement).moveTo();
        $(sel.aboutUs).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.aboutUsPageTitle);
    });

    it('should redirect to `Customers` page', function () {
        $(sel.companyElement).moveTo();
        $(sel.customers).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.customersPageTitle);
    });

    it('should redirect to `Partners` page', function () {
        $(sel.companyElement).moveTo();
        $(sel.partners).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.partnersPageTitle);
    });

    it('should redirect to `Newsroom` page', function () {
        $(sel.companyElement).moveTo();
        $(sel.newsroom).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.newsroomPageTitle);
    });

    it('should redirect to `Careers` page', function () {
        $(sel.companyElement).moveTo();
        $(sel.careers).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.careersPageTitle);
    });

    it('should redirect to `Innovate Jax` page', function () {
        $(sel.companyElement).moveTo();
        $(sel.innovateJax).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.innovateJaxPageTitle);
    });

    it('should redirect to `Login` page', function () {
        $(sel.loginElement).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.loginPageTitle);
    });

    it('should redirect to `Schedule Demo` page', function () {
        $(sel.scheduleDemoButton).click();
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.be.equal(exp.scheduleDemoTitle);
    });
});

describe('should check footer-bottom', function () {

    it('should have footer-bottom', function () {
        browser.url('./.');
        const footerBottomIsDisplayed = $(sel.footerBottom).isDisplayed();
        expect(footerBottomIsDisplayed).to.be.true;
    });

    it('should have `Subscribe to our blog` button', function () {
        const subscribeToBlogButtonisDisplayed = $(sel.subscribeToBlogButton).isDisplayed();
        expect(subscribeToBlogButtonisDisplayed).to.be.true;
    });

    it('should subscribe to blog ', function () {
        $(sel.subscribeEmailField).setValue(data.email);
        $(sel.subscribeToBlogButton).click();
        const actualMessage = $(sel.subscribeMessage).getText();
        expect(actualMessage).to.be.equal(exp.subscribeWrongEmailMessage);
    });
});

