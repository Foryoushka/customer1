import { expect } from 'chai' ;
import exp from '../expected/careers-page'
import expMain from'../expected/main-page'
import sel from '../selectors/main-page'
import selCareer from '../selectors/careers-page'
import data from '../data/careers-page'
const path = require('path');

before ( function () {
    browser.url('./.');
    browser.maximizeWindow();
    $(sel.companyElement).moveTo();
    $(sel.careers).waitForDisplayed();
    $(sel.careers).click();
});

describe('should check if it is a correct page', function () {

    it('should get title', function () {
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.eql(expMain.careersPageTitle);
    });

    it('should `See Open Positions Button` exist', function () {
        let openPositionsButtonIsDisplayed = $(selCareer.seeOpenPositionsButton).isDisplayed();
        expect(openPositionsButtonIsDisplayed).to.be.true;
    });

    it('should redirect to open positions list', function () {
        $(selCareer.seeOpenPositionsButton).click();
        let openPositionsHeaderIsDisplayed = $(selCareer.openPositionsHeader).waitForDisplayed();
        expect(openPositionsHeaderIsDisplayed).to.be.true;
    });

    it('should `Quality Assurance Analyst` displayed  ', function () {
        let qualityAssuranceAnalystIsDisplayed = $(selCareer.qaAnalyst).isDisplayed();
        expect(qualityAssuranceAnalystIsDisplayed).to.be.true;
       browser.pause(1000);
    });

    it('should redirect to QAAnalyst page', function () {
        const currentWindow = browser.getWindowHandles()[0];
        $(selCareer.qaAnalyst).click();
        const handles = browser.getWindowHandles();
        const newWindow = handles.filter(el => el !==  currentWindow)[0];
            if(newWindow) {
                browser.switchToWindow(newWindow);
                let actualTitle = browser.getTitle();
                let actualH2 = $(selCareer.h2).getText();
                expect(actualTitle).to.be.equal(exp.bambooHRTitle);
                expect(actualH2).to.be.equal(exp.h2BambooHR);
                //browser.pause(1000);
            }
        });

    it('should have `apply for this job button`', function () {
        let applyForThisJobButtonIsDisplayed = $(selCareer.applyForThisJobButton).waitForDisplayed();
        expect(applyForThisJobButtonIsDisplayed).to.be.true;
    });
});

describe('should check application form', function() {

    it('should application form to be displayed', function () {
        $(selCareer.applyForThisJobButton).click();
        let applicationFormIsDisplayed = $(selCareer.applicationForm).waitForDisplayed();
        expect(applicationFormIsDisplayed).to.be.true;
    });

    it('should fill in application form', function () {
        $(selCareer.firstNameField).doubleClick();
        $(selCareer.firstNameField).addValue(data.user.firstName);
        $(selCareer.lastNameField).doubleClick();
        $(selCareer.lastNameField).addValue(data.user.lastName);
        $(selCareer.phoneField).doubleClick();
        $(selCareer.phoneField).addValue(data.user.phone);
        $(selCareer.cityField).doubleClick();
        $(selCareer.cityField).addValue(data.user.city);
        //$(selCareer.stateField).doubleClick();
        // $(selCareer.stateFieldDropDown).selectByVisibleText(data.user.state);
        $(selCareer.zipField).doubleClick();
        $(selCareer.zipField).addValue(data.user.zip);
        $(selCareer.countryField).doubleClick();
        //$(selCareer.countryFieldDropDown).selectByVisibleText(data.user.country);
        $(selCareer.resumeField).doubleClick();
        const filePath = path.join(__dirname, 'Kate_Boytsova_QAEngineer.docx');// one needs to write their local path to their file
        const remoteFilePath = browser.uploadFile(filePath);
        //$(selCareer.resumeField).setValue(remoteFilePath);
        $(selCareer.dateField).doubleClick();
        $(selCareer.dateField).addValue(data.user.date);
        $(selCareer.salaryField).doubleClick();
        $(selCareer.salaryField).addValue(data.user.salary);
        $(selCareer.authorizedField).doubleClick();
        $(selCareer.authorizedField).addValue(data.user.authorized);
        $(selCareer.sponsorField).doubleClick();
        $(selCareer.sponsorField).addValue(data.user.sponsorship);
        $(selCareer.locationField).doubleClick();
        $(selCareer.locationField).addValue(data.user.location);
    });

    it('should `Submit Application` button displayed', function () {
        let submitApplicationButtonIsDisplayed = $(selCareer.submitButton).isDisplayed();
        expect(submitApplicationButtonIsDisplayed).to.be.true;
    });

    // it('should thank you to be displayed', function () {
    //     $(selCareer.submitButton).click();
    //     let thankYouSignIsDisplayed = $(selCareer.thankYouSign).waitForDisplayed();
    //     expect(thankYouSignIsDisplayed).to.be.true;
    // });
    //
    // it('should success to be displayed', function () {
    //     let successSignIsDisplayed = $(selCareer.successSign).waitForDisplayed();
    //     expect(successSignIsDisplayed).to.be.true;
    // });
});

