const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4');
const inputValues4andClick = require ('../../helpers/inputValues4andClick');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 fields are filled in', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true)
        });

    });

    describe('Other paths', function () {

        it('TC-022 Gender he works', function () {
            browser.url('');
            inputValues4andClick (data.name, data.gender.he, data.age, data.storyType.Comedy);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true)
        });

    });

})