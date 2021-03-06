const dialog = require('../../pageObjects/dialog.page');
const {expect} = require('chai').expect;

describe('Dialog', ()=>{
    // Execute a block of code before every test
    before(() => {
    });

    it('Verify that the text entry dialog username & password fields are editable', ()=>{
        dialog.appBtn.click();
        dialog.alertDialogBtn.click();
        dialog.textEntryDialogBtn.click();

        dialog.userNameField.addValue("Test User");
        dialog.userNameField.clearValue();
        dialog.userNameField.addValue("Actual User");

        dialog.passwordField.clearValue();
        dialog.passwordField.addValue("Test Pass");

        let text = dialog.userNameField.getText();
        console.log(text);
        expect(text).equal("Actual User");

        dialog.dialogOkBtn.click();
    });

    it('Verify the repeat alarm options has attribute checked set to true when selected', ()=>{
        let isChecked, text;

        dialog.appBtn.click();
        dialog.alertDialogBtn.click();
        dialog.repeatAlarmBtn.click();

        text = dialog._weekdayCheckbox(0).getText();
        expect(text).equal('Every Monday');

        isChecked = dialog._weekdayCheckbox(0).getAttribute('checked');
        expect(isChecked).equal('false');

        dialog._weekdayCheckbox(0).click();

        isChecked = dialog._weekdayCheckbox(0).getAttribute('checked');
        expect(isChecked).equal('true');
    });

    // Execute a block of code after every test
    after(() => {
        driver.reset();
    });
})